
export class Employee{
  id:number;
  fullname:string;
  address:string;
  phone:string;
  position:number;
  active:boolean;
}

export class PositionList{
    positions:any[];
    constructor(){
        this.positions=[
            {"id":1, "title":"Project Manager"},
            {"id":2, "title":"Production Manager"},
            {"id":3, "title":"General Manager"},
            {"id":4, "title":"HR Director"},
            {"id":5, "title":"Senior Editor"},
            {"id":6, "title":"Editor"}
        ];
    }
}

