import { Component, Input, OnInit,Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input()
  employees: Employee[];

  @Output()
  selectedEmployee = new EventEmitter<Employee>();
  @Output()
  selectTrash = new EventEmitter<Employee>();


  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(change:SimpleChanges){
    console.log('EmployeeListComponent:', this.employees);
  }

  clickItem(item){
    this.selectedEmployee.emit(item);
  }
  clickTrash(item, $event){
    //$event.preventDefault();
    this.selectTrash.emit(item);
  }

  public employeeTrack(idx: number, item: Employee) {
    return item ? item.id : idx;
  }

}
