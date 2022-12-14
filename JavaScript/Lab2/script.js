

/*****************Random**************** */
var tip=new Array();
for(let i=1;i<=10;i++)
{
    tip.push("Day"+i);
}

document.writeln("Random : ",tip[Math.floor(Math.random()*10)],"<br>");

/************************show data and time now************************** */
function show()
{
    var d=new Date();
    alert(d.toLocaleString());
}



/*************************Frequency number************************* */
function freq(arr,x)
{
    var c=0;
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]==x)
         c++;
    }
    return c;
}



var arr=[1,3,5,7,5,5,5,5],x=5;

document.writeln("Frequency of number is : ",freq(arr,x),"<br>");



/*****************Remove character from array*******************/

function rem(arr,ch)
{

for(let i=0;i<arr.length;)
{
    if(arr[i]!=ch){
        i++;
      continue;
     }

     arr.splice(i,1);
}
  return arr;

}
 arr=[2,3,'a','b','c',3,4,'a','z'],ch='a';
document.writeln("Return array After removed char : ",rem(arr,ch),"<br>");


/******************Max number in array************* */


function maxNumber(arr)
{

    var mx=0;
    for(let i=0;i<arr.length;i++)
    {
        mx=Math.max(mx,arr[i]);
    }

    return mx;

}

arr=[2,5,6,1,9,3];
document.writeln("Max Number  : ",maxNumber(arr));