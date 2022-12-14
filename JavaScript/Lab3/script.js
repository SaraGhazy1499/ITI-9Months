function clock()
{

    setInterval(function(){
        var d=new Date();
        document.getElementById('time').innerText=d.toLocaleTimeString();
    },1000);

}



function letter(e)
{
    console.log(e);
    let Reg='/^[a-zA-Z]+$/';

    if(match(Reg))
    return true;
    else
    return false;

}



function _open()
{
    setTimeout( window.open("adv.html"),3000);
   
}

