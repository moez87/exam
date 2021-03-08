var p =localStorage.getItem("company")||[];
var z=JSON.parse(p)
function registercompany(){
    let CompanyName = document.getElementById("input1").value;
    let address = document.getElementById("input3").value;
    let mail = document.getElementById("input4").value;
   
   
    let id=Math.floor(Math.random()* 100);
  
    let company={id:id,CompanyName:CompanyName,address :address ,email:mail}
    p.push(company);
    localStorage.setItem("company",JSON.stringify(p));
}

function affiche() {
    var z= localStorage.getItem("company");
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

         <td> <button onclick="update(${x.id})"class="btn btn-success" >Update</button><td></td>
         <td><button onclick="Delete(${i})" class="btn btn-danger" type="button">Delete</button></td>
        </tr>  `     
        i++
        })
        
        document.getElementById("body1").innerHTML= affichage;
    } 
    function Delete(a) {
        alert (a)
       let z =localStorage.getItem("compnay");
       let p =JSON.parse(z);
       p.splice(a-1,1);
       localStorage.setItem("company",JSON.stringify(p))
     
     console.log(p);
     
        affichage()
      }
      function update(b) {
        let z =localStorage.getItem("company");
        let p =JSON.parse(z);
        ID=b;
       console.log(b);
       let update =p.find(x => x.id==b);
       console.log(update);
      document.getElementById("input1").value=update.CompanyName
      document.getElementById("input3").value=update.address
      document.getElementById("input4").value=update.mail
      window.location.reload()


      }
   


