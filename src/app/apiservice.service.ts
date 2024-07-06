import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  readonly apiUrl='https://localhost:7041/api/';

  constructor(private http: HttpClient ) 
  { 

  }

   getDepartmentList() : Observable<any[]>{
    return  this.http.get<any[]>(this.apiUrl+'department/GetDepartment');
  }

  getdeparmentByid(deptid:number):Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl+'department/GetDepartmentById/' +deptid, httpOptions);
  }

  addDepartment(dept:any):Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl+'department/AddDepartment', dept, httpOptions);
  }

  updateDepartment(dept:any): Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl+'department/updateDepartment', dept, httpOptions);
  }

  deleteDepartment(deptid:number): Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'department/DeleteDept/' + deptid, httpOptions);
  }

  getEmployee():Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl+'Employee/GetEmp/');
  }
  
  getEmployeeByid(empid:number):Observable<any>
  {
    return this.http.get<any>(this.apiUrl+'Employee/GetEmp/'+empid);
  }

  addEmployee(emp:any):Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl+ 'Employee/AddEmployee', emp, httpOptions);
  }

  deleteEmployee(empid:any):Observable<any>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<any>(this.apiUrl+ 'Employee/DeleteEmployee/'+empid, httpOptions);
  }

}
