var p =localStorage.getItem("employe")||[];
var z=JSON.parse(p)
function registerempl(){
    let CompanyName = document.getElementById("input1").value;
    let address = document.getElementById("input2").value;
    let mail = document.getElementById("input3").value;
    // let Employe = document.getElementById("input4").value;
   
    let id=Math.floor(Math.random()* 100);
  
    let employee={id:id,CompanyName:CompanyName,address :address ,email:mail,Employe:[]}
    p.push(employee);
    localStorage.setItem("employe",JSON.stringify(p));
    // window.location.replace("crud.html")
}
function affichage() {
    var z= localStorage.getItem("employe");
    console.log(z);
    let p =JSON.parse(z)
     let affichage =``;
     let i=1
     p.forEach(x=>{
       console.log(x.id);
         affichage+=`<tr>
         <th scope="row">${i}</th>
         <td>${x.CompanyName}</td>
         <td>${x.address}</td>
         <td>${x.mail}</td>

         <td> <button onclick="update(${x.id})"class="btn btn-success" type="button"data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button><td></td>
         <td><button onclick="Delete(${i})" class="btn btn-danger" type="button">Delete</button></td>
        </tr>  
       
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content"> 
       <div class="modal-header">
         
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
       <div class="container" style="background-color:grey;width: 400px; height: 300px;">
         <div class=col-6 style="width:350px;margin:200px auto;">  
             
         <div class="input-group">
         <span class="input-group-text">Company name</span>
         <input id="input1" type="text" aria-label="First name" class="form-control">
         </div>
         <div class="input-group">
             <span class="input-group-text"> address</span>
             <input id="input2" type="text" aria-label="adress" class="form-control">
             </div>
         
        
         <div class="input-group">
         <span class="input-group-text"> email adress</span>
         <input id="input3" type="email" aria-label="First name" class="form-control">
         </div>
      
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button onclick="save(${x.id})"type="button" class="btn btn-primary">Save changes</button>
       </div>
     </div>
   </div>
 </div> `     
     i++
     })
     
     document.getElementById("input1").innerHTML= affichage;
 } 

 function Delete(a) {
    alert (a)
   let z =localStorage.getItem("employe");
   let p =JSON.parse(z);
   p.splice(a-1,1);
   localStorage.setItem("employe",JSON.stringify(p))
 
 console.log(p);
 
    affichage()
  }
 
  function update(b) {
   let z =localStorage.getItem("employe");
   let p =JSON.parse(z);
   ID=b;
  console.log(b);
  let update =p.find(x => x.id==b);
  console.log(update);
 document.getElementById("input1").value=update.name
 document.getElementById("input2").value=update.textarea
 }
 function save () { 
  
   let z =localStorage.getItem("employe");
   let p =JSON.parse(z);
   let  save  =p.find(x => x.id==ID);
   console.log(save);
   save.name=document.getElementById("input1").value
   save.textarea=document.getElementById("input2").value
 
   localStorage.setItem("employe",JSON.stringify(p))
 window.location.reload()
 }
 
 