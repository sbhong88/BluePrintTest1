var fs = require('fs');
var xml=`<employees>  
<employee>  
    <fullName>John Doe</fullName>   
    <address>Address 1</address>
    <phoneNumber>4625162736</phoneNumber> 
    <position>2</position> 
</employee>  
<employee>  
    <fullName>Roger Flynn</fullName>   
    <address>Address 2</address>
    <phoneNumber>4625122736</phoneNumber> 
    <position>2</position>  
</employee>  
<employee>  
    <fullName>Alex Visaramy</fullName>   
    <address>Address 3</address>
    <phoneNumber>3225122736</phoneNumber> 
    <position>3</position>  
</employee>
<employee>  
    <fullName>Kyle Pitt</fullName>   
    <address>Address 4</address>
    <phoneNumber>3243122736</phoneNumber> 
    <position>4</position>  
</employee>  
<employee>  
    <fullName>Elizabeth James</fullName>   
    <address>Address 5</address>
    <phoneNumber>3233122736</phoneNumber> 
    <position>5</position>  
</employee>  
<employee>  
    <fullName>Shelly Bell</fullName>   
    <address>Address 6</address>
    <phoneNumber>1253122736</phoneNumber> 
    <position>6</position>  
</employee>  
<employee>  
    <fullName>Martin Ziberman</fullName>   
    <address>Address 7</address>
    <phoneNumber>3333122736</phoneNumber> 
    <position>6</position>  
</employee>  
</employees>  
`;

let xmlString = `<?xml version="1.0" encoding="UTF-8"?>`+xml;
//let xmlString = `<?xml version="1.0" ?>`+xml;
let xmlParser = require('xml2json');
let json = xmlParser.toJson(xmlString);
console.log(JSON.stringify(json));
