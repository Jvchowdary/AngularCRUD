import { Component, Input, OnInit } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrl: './add-edit-department.component.css'
})
export class AddEditDepartmentComponent implements OnInit {

constructor(private service:ApiserviceService) {
}
@Input() depart: any;
  DepartmentId = "";
  DepartmentName = "";

  ngOnInit(): void {

    this.DepartmentId = this.depart.DepartmentId;
    this.DepartmentName = this.depart.DepartmentName;
  }

  addDepartment() {
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.addDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    var dept = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    this.service.updateDepartment(dept).subscribe(res => {
      alert(res.toString());
    });
  }

}
