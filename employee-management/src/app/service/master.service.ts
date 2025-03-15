import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';
import { Employee } from '../model/class/Employee';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/'
  constructor(private http :HttpClient ) { }

  getAllDept(): Observable<IApiResponse>{
    return this.http.get<IApiResponse>(this.apiUrl + "GetParentDepartment");
  }

  getChildDeptById(deptid: number):Observable<IApiResponse>{
    return  this.http.get<IApiResponse>(`${this.apiUrl}GetChildDepartmentByParentId?deptId=${deptid}`)
    //this is the template literal
  }
    saveEmployee(obj:Employee): Observable<IApiResponse>{
      debugger;
      console.log("Payload sent to API:", obj);
      return this.http.post<IApiResponse>(this.apiUrl + "CreateEmployee", obj);
  }

}
