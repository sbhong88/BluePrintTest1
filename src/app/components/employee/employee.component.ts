import { Component, OnInit } from '@angular/core';
import { Employee, SampleData } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];
  selectedEmployee:Employee;
  employeeNumber:number;
  constructor() { 
    this.employees=[];
    this.selectedEmployee=null;
    this.employeeNumber=1;
  }

  getEmployees(){
    let sampleData=JSON.parse(new SampleData().sampleJson);
    console.log("sample data ", sampleData);
    this.employees=[];
    sampleData.employees.employee.forEach(e=>{
      let emp=new Employee();
      emp.id= this.employeeNumber;
      emp.name = e.fullName;
      emp.address = e.address;
      emp.phone = e.phoneNumber;
      emp.position = e.position;
      this.employees.push(emp);
      this.employeeNumber++;
    });
    console.log("sample data ", this.employees);

  }
  getSelectedEmployee(employee){
    this.selectedEmployee = employee;
  }

  handelTrash(employee){
    this.employees = this.employees.filter(e=>e.id != employee.id);
  }
  
  ngOnInit(): void {
    this.getEmployees();
  }

  updatedEmployee(employee){
    if (employee && employee.id>0){ // update.
      let index = this.employees.findIndex(e=>e.id == employee.id);
      if (index>=0){
        this.employees[index]=employee;
      } else {
        employee.id = this.employeeNumber;
        this.employeeNumber++;
        this.employees.push(employee);
      }
    }
    else if (employee && employee.id==0){ // insert
      let index = this.employees.findIndex(e=>e.id == employee.id);
      if (index>=0){
        this.employees[index]=employee;
      } else {
        employee.id = this.employeeNumber;
        this.employeeNumber++;
        this.employees.push(employee);
      }
    }
  }

}
