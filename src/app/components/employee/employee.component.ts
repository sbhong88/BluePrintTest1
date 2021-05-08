import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];
  selectedEmployee:Employee;
  constructor(
    private dataService: DataServiceService
  ) { 
    this.employees=this.dataService.getEmployees();
    this.selectedEmployee=null;
  }

  setActive(employee){
    this.employees.forEach(e=>{
      if (employee && e.id==employee.id){
        e.active=true;
      } else {
        e.active=false;
      }
    });
  }

  getSelectedEmployee(employee){
    this.selectedEmployee = employee;
    this.setActive(employee);
  }

  handelTrash(employee){
    this.employees = this.employees.filter(e=>e.id != employee.id);
    this.setActive(null);
  }
  
  ngOnInit(): void {
    //this.dataService.getEmployees();
  }

  updatedEmployee(employee){
    // if (employee && employee.id>0){ // update.
    //   let index = this.employees.findIndex(e=>e.id == employee.id);
    //   if (index>=0){
    //     this.employees[index]=employee;
    //     this.afterUpdateEmployee(employee.id);
    //   } else {
    //     employee.id = this.dataService.getEmployeeNumber();
    //     this.employees.push(employee);
    //     this.afterUpdateEmployee(employee.id);
    //   }
    // }
    // else if (employee && employee.id==0){ // insert
      let index = this.employees.findIndex(e=>e.id == employee.id);
      if (index>=0){
        this.employees[index]=employee;
        this.afterUpdateEmployee(employee.id);
      } else {
        employee.id = this.dataService.getEmployeeNumber();
        this.employees.push(employee);
        this.afterUpdateEmployee(employee.id);
      }
    //}
  }
  afterUpdateEmployee(employeeId){
     let employee = this.employees.find(e=>e.id == employeeId);
     if (employee){
       this.getSelectedEmployee(employee);
     }
  }

}
