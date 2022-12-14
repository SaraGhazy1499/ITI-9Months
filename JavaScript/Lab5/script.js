function infoLogin()
{
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
 
    sessionStorage.setItem("username",username);
    sessionStorage.setItem("password",password);  

    if(document.getElementById("check").checked)
    {
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);  
    }else if(localStorage.getItem("username")!=null)
    {
        localStorage.clear();
    }
};


if(sessionStorage.getItem("username")!=null)
{
document.getElementById("namelogin").innerHTML
="<h3>"+sessionStorage.getItem("username")+"</h3>";
}


if(localStorage.getItem("username")!=null)
{
    if(document.getElementById("username")!=null)
    {
    document.getElementById("username").value=localStorage.getItem("username");
    document.getElementById("password").value=localStorage.getItem("password");
    document.getElementById("check").checked=true;
    }
}

function logout()
{
    sessionStorage.clear();

}

let student=
[
    
    {
        "id":1,
        "name":"sara",
        "age":23,
        "address":"assiut",
        "skills":
        [
            "reading",
            "playing Football"

        ],
        "isLeader":true

    },

    {
        "id":2,
        "name":"yara",
        "age":18,
        "address":"assiut",
        "skills":
        [
            "reading",
            "drawing"

        ],
        "isLeader":false

    },


    {
        "id":3,
        "name":"roba",
        "age":18,
        "address":null,
        "skills":
        [
            "reading"

        ],
        "isLeader":false

    },
    
];


for(let i=0;i<student.length;i++)
{
    let st="st"+(i+1)+"-";
    
    document.getElementById(st+"id").innerText=student[i].id;
    document.getElementById(st+"name").innerText=student[i].name;

    document.getElementById(st+"skills").innerText='';
    for(let j=0;j<student[i].skills.length;j++)
    {
        document.getElementById(st+"skills").innerText+=student[i].skills[j]+',';

    }
}
