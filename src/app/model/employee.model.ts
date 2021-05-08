
export class Employee{
  id:number;
  name:string;
  address:string;
  phone:string;
  position:number;
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

export class SampleData{
    sampleJson:string;
    constructor(){
        this.sampleJson="{\"employees\":{\"employee\":[{\"fullName\":\"John Doe\",\"address\":\"Address 1\",\"phoneNumber\":\"4625162736\",\"position\":\"2\"},{\"fullName\":\"Roger Flynn\",\"address\":\"Address 2\",\"phoneNumber\":\"4625122736\",\"position\":\"2\"},{\"fullName\":\"Alex Visaramy\",\"address\":\"Address 3\",\"phoneNumber\":\"3225122736\",\"position\":\"3\"},{\"fullName\":\"Kyle Pitt\",\"address\":\"Address 4\",\"phoneNumber\":\"3243122736\",\"position\":\"4\"},{\"fullName\":\"Elizabeth James\",\"address\":\"Address 5\",\"phoneNumber\":\"3233122736\",\"position\":\"5\"},{\"fullName\":\"Shelly Bell\",\"address\":\"Address 6\",\"phoneNumber\":\"1253122736\",\"position\":\"6\"},{\"fullName\":\"Martin Ziberman\",\"address\":\"Address 7\",\"phoneNumber\":\"3333122736\",\"position\":\"6\"}]}}";
    }
}
