import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiResponse,IChildDept,  IParentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/class/Employee';
@Component({
  selector: 'app-employee',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{


  isFormVisible = signal<boolean>(false);
  masterSrv=inject(MasterService);
  parentDeptList = signal<IParentDept[]>([]);
  childDeptList = signal<IChildDept[]>([]);
  parentDeptId: number =0;
  //here we used class object
  employeeObj: Employee = new Employee();

  ngOnInit(): void {
    this.getParentDept();
  }
  getParentDept(){
    this.masterSrv.getAllDept().subscribe((res:IApiResponse)=>{
      this.parentDeptList.set(res.data);
    })
  }
  onParentDeptChange(){
    this.masterSrv.getChildDeptById(this.parentDeptId).subscribe((Res: IApiResponse)=>{
        this.childDeptList.set(Res.data)
    })
  }
    onSave() {
    debugger;
   
      this.masterSrv.saveEmployee(this.employeeObj).subscribe((res:IApiResponse)=>{
        debugger;
        alert("Employee Created");
      }
      )
    
   
  }
   
  }
  


