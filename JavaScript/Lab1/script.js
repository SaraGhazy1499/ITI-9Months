alert("Welcome to my site");
var x=prompt("Enter Your Name : ");
document.writeln("welcome "+x);

function  maxNumber(a,b,c)
{
    return Math.max(a,b,c);

}


var a=prompt("Enter Number a : ");
var b=prompt("Enter Number b : ");
var c=prompt("Enter Number c : ");

document.writeln("<br>");

document.writeln("Max Number is : "+maxNumber(parseInt(a),parseInt(b),parseInt(c)));


document.writeln("<br>");

var obj=
{
    "name":"sara ghazy" , 
    "address":"assiut",
    "phone" :"12345",
    "age":23 ,
    "track":"open source"

}

document.writeln("print my infromation : <br> ",
"Name: ",obj.name, " , Address: ",obj.address,
" , Phone: " ,obj.phone," , age: ",obj.age," , track: ",obj.track);

document.writeln("<br>");

var c=prompt("Enter Temp Celsius : ");

var f=(9*parseInt(c)+5*32)/5.0;

document.writeln("Fahrenheit  Temp : ",f);

document.writeln("<br> Table of 5 : ");

for(let i=1;i<=12;i++)
{
    document.writeln("5 * ",i," = ",i*5,"<br>");

}