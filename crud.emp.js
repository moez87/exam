var p =localStorage.getItem("employe")||[];
var z=JSON.parse(p)
function registerempl(){
    let fname = document.getElementById("input1").value;
    let lname = document.getElementById("input2").value;
    let mail = document.getElementById("input3").value;
    let address = document.getElementById("input4").value;
   
    let id=Math.floor(Math.random()* 100);
  
    let employe={id:id,fname:fname,lname:lname,email:mail,address:address,role:"user"}
    z.push(employe);
    localStorage.setItem("employe",JSON.stringify(z));
    // window.location.replace("crud.html")
}