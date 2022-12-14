
let gallary=document.getElementsByClassName('img');

for(let i=0;i<gallary.length;i++)
{
gallary[i].addEventListener('mouseover',function()
{

    this.style.opacity="0.3";
    this.style.transition="2s";

});

gallary[i].addEventListener('mouseout',function()
{

    this.style.opacity="1";
    this.style.transition="2s";

});
}

/***************************** */

let color=['red','blue','green','yellow','orange'];

function changeColor()
{
    
    let span=document.getElementsByTagName("span");
 
    for(let i=0;i<span.length;i++)
    {
        let random=Math.floor(Math.random()*5);
        span[i].style.color=color[random];
          random=Math.floor(Math.random()*5);
        span[i].style.backgroundColor=color[random];
    }
}

/************************ */

function togglePassword()
{
    let pass=document.getElementById("password");
    if(pass.type=='password')
    {
        pass.type="text";
        document.getElementById("toggle").textContent="Hide";
    }else
    {

        pass.type="password";
        document.getElementById("toggle").textContent="Show";

    }
}

/******************************* */

let c=0;
function next()
{
    if(c==4)
    {
       // document.getElementById("next").style.disabled=true;

    }else
    {
        c++;
        document.getElementsByTagName("p")[c-1].style.display="none";
        document.getElementsByTagName("p")[c].style.display="block";
    }

}


function prev()
{
    if(c==0)
    {

    }else
    {
        c--;
        
        document.getElementsByTagName("p")[c+1].style.display="none";
        document.getElementsByTagName("p")[c].style.display="block";
    }
    
}