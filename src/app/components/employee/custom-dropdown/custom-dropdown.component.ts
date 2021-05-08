import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { PositionList } from 'src/app/model/employee.model';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit, OnChanges{
  @Input()
  public selectId;
  @Output()
  public positionChanged=new EventEmitter<any>();

  public selectedOption:{'id':number,'title':string};
  constructor() {
    this.options = (new PositionList()).positions;
    this.selectedOption=null;
  }
  public options: any;

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges: ", changes);
    this.selectedOption=null;
    this.showMenu =false;
    if (this.selectId>=0) {
      let item = this.options.find(e=>e.id==this.selectId);
      if (item){ 
        this.selectedOption = item;
      }
    }
  }

  changeSelectedOption(option){
    console.log("changeSelectedOption: ", option);
    this.showMenu=false;
    this.positionChanged.emit(option);
  }

  public showMenu=false;
  dropdownToggleClick(){
    this.showMenu = !this.showMenu;
  }

}

