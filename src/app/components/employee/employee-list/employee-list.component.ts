import { Component, Input, OnInit,Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Employee, PositionList } from 'src/app/model/employee.model';

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


  public positions;
  constructor() { 
    this.positions = (new PositionList()).positions;
  }

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

  getStyle(emp, from){
    if(emp.active){
      return {'background-color':'#F9F5F4'};
    }
    return null;
  }

  getPosition(positionId){
    let p = this.positions.find(e=>e.id == positionId);
    if (p){ return p.title ;}
    return '';
  }
}

