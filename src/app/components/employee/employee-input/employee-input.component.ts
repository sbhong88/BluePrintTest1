import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.scss']
})
export class EmployeeInputComponent implements OnInit, OnChanges {
  @Input()
  public selectedEmployee:Employee;
  @Output()
  updatedEmployee = new EventEmitter<Employee>();

  public MAX_USERNAME_LENGTH=50;
  public form: FormGroup;
  constructor() {
    this.newCreateFromGroup();
   }
  ngOnInit(): void {
    
  }
  ngOnChanges(){
    if (this.selectedEmployee){
      this.selectedCreateFromGroup();
    }
  }

  newCreateFromGroup(){
    this.form = new FormGroup({
      id: new FormControl(0, null),
      fullname: new FormControl(null, [Validators.required, Validators.maxLength(this.MAX_USERNAME_LENGTH)]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
    });
  }
  selectedCreateFromGroup(){
    this.form = new FormGroup({
      id: new FormControl(this.selectedEmployee.id, null),
      fullname: new FormControl(this.selectedEmployee.fullname, [Validators.required, Validators.maxLength(this.MAX_USERNAME_LENGTH)]),
      address: new FormControl(this.selectedEmployee.address, [Validators.required]),
      phone: new FormControl(this.selectedEmployee.phone, [Validators.required]),
      position: new FormControl(this.selectedEmployee.position, [Validators.required]),
    });
  }

  submit(){
    var values = this.form.value;
    this.updatedEmployee.emit(values);
    console.log("Clicked SAVE....", this.form.value);
  }

  addNew(){
    this.form.controls["id"].setValue(0);
    this.form.controls["fullname"].setValue("");
    this.form.controls["address"].setValue("");
    this.form.controls["phone"].setValue("");
    this.form.controls["position"].setValue("");
  }
}
