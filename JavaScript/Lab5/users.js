
   
 let data='';
   let xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4)
        {
             data=JSON.parse(this.responseText).data;
            console.log(data);
            for(let i=0;i<data.length;i++)
            {
                let id="user"+(i+1);
                document.getElementById(id+"Id").innerText=data[i].first_name;
                document.querySelector("#"+id+" h4").innerText=
                data[i].first_name +' '+data[i].last_name;

                document.querySelector("#"+id+" p").innerText=
                data[i].email;

                document.querySelector("#"+id+" img").src=
                data[i].avatar;

            }
        }
    }

    xhttp.open("GET","https://reqres.in/api/users",true);
    xhttp.send();



    function show(id)
    {
       let check=document.getElementById("user"+id).style.display;
       if(check=="block")
        document.getElementById("user"+id).style.display="none";
        else
        document.getElementById("user"+id).style.display="block";

    }


    function showbyid()
    {

        for(let i=0;i<data.length;i++)
        {
            let id="user"+(i+1);
            document.getElementById(id).style.display="none";

        }
         id=document.getElementById("search").value;
        document.getElementById("user"+id).style.display="block";

    }