import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee, PositionList } from 'src/app/model/employee.model';

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
  public selectPositionId=0;
  public errorMessage="";
  constructor(
    private cdr: ChangeDetectorRef
  ) {
    this.newCreateFromGroup();

   }
  ngOnInit(): void {
    
  }
  ngOnChanges(){
    if (this.selectedEmployee){
      this.selectedCreateFromGroup();
    }
    this.errorMessage="";
  }

  newCreateFromGroup(){
    this.form = new FormGroup({
      id: new FormControl(0, null),
      fullname: new FormControl(null, [Validators.required, Validators.maxLength(this.MAX_USERNAME_LENGTH)]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      position: new FormControl(0, [Validators.required]),
    });
    this.selectPositionId=0;
  }
  selectedCreateFromGroup(){
    this.form = new FormGroup({
      id: new FormControl(this.selectedEmployee.id, null),
      fullname: new FormControl(this.selectedEmployee.fullname, [Validators.required, Validators.nullValidator,Validators.minLength(1), Validators.maxLength(this.MAX_USERNAME_LENGTH)]),
      address: new FormControl(this.selectedEmployee.address, [Validators.required, Validators.nullValidator,Validators.minLength(1)]),
      phone: new FormControl(this.selectedEmployee.phone, [Validators.required ,Validators.nullValidator,Validators.minLength(10)]),
      position: new FormControl(this.selectedEmployee.position, [Validators.required,Validators.nullValidator]),
    });
    this.selectPositionId=this.selectedEmployee.position;
  }

  submit(){
    if (this.form.status=="VALID"){
      var values = this.form.value;
      this.updatedEmployee.emit(values);
      console.log("Clicked SAVE....", this.form.value);
    } else {
      let errors=[];
      Object.keys(this.form.controls).forEach(key=>{
        if (this.form.controls[key].status=='INVALID'){
          errors.push(key);
        }
      });
      console.log("Error: " + errors.join(", "));
      this.errorMessage = "Please check "+errors.join(", ")+".";
    }
  }

  addNew(){
    this.form.controls["id"].setValue(0);
    this.form.controls["fullname"].setValue("");
    this.form.controls["address"].setValue("");
    this.form.controls["phone"].setValue("");
    this.form.controls["position"].setValue("");
    this.selectPositionId=100;
    this.cdr.markForCheck();
  }
  positionChanged($event){
    console.log("positionChanged:", $event);
    this.form.controls["position"].setValue($event.id);
    this.selectPositionId = $event.id;
  }

  focus(){
    this.errorMessage="";
  }

}
