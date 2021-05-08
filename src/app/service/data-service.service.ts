import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  employeeNumber=1;

  getEmployees(){
    let employees=[];
    let sampleData=JSON.parse(new SampleData().sampleJson);
    console.log("sample data ", sampleData);
    sampleData.employees.employee.forEach(e=>{
      let emp=new Employee();
      emp.id= this.employeeNumber;
      emp.fullname = e.fullName;
      emp.address = e.address;
      emp.phone = e.phoneNumber;
      emp.position = e.position;
      emp.active=false;
      employees.push(emp);
      this.employeeNumber++;
    });
    console.log("sample data ", employees);
    return employees;

  }

  getEmployeeNumber(){
    let num=this.employeeNumber;
    this.employeeNumber++;
    return num;
  }

}


export class SampleData{
  sampleJson:string;
  constructor(){
      this.sampleJson="{\"employees\":{\"employee\":[{\"fullName\":\"John Doe\",\"address\":\"Address 1\",\"phoneNumber\":\"4625162736\",\"position\":\"2\"},{\"fullName\":\"Roger Flynn\",\"address\":\"Address 2\",\"phoneNumber\":\"4625122736\",\"position\":\"2\"},{\"fullName\":\"Alex Visaramy\",\"address\":\"Address 3\",\"phoneNumber\":\"3225122736\",\"position\":\"3\"},{\"fullName\":\"Kyle Pitt\",\"address\":\"Address 4\",\"phoneNumber\":\"3243122736\",\"position\":\"4\"},{\"fullName\":\"Elizabeth James\",\"address\":\"Address 5\",\"phoneNumber\":\"3233122736\",\"position\":\"5\"},{\"fullName\":\"Shelly Bell\",\"address\":\"Address 6\",\"phoneNumber\":\"1253122736\",\"position\":\"6\"},{\"fullName\":\"Martin Ziberman\",\"address\":\"Address 7\",\"phoneNumber\":\"3333122736\",\"position\":\"6\"}]}}";
  }
}
