var tableau=[20,2,30,50,6,70];
var sum = 0;
function tab() {
  

  
  document.getElementById("span").innerHTML =tableau;
console.log(tableau);
let tab
let minimum=Math.min(...tableau);

tableau.forEach((x,index) => {
   if(minimum==x){
       console.log(index);
       tableau.splice(index,1)
   }
   console.log(tableau);
})


// tableau.splice(,1)

}
function calculate() {
  let tab=[4,5,-1,-2,6]  ;
  var somme=0;
  tab.forEach((x) => {
      console.log(x);
      if(x>0){
        somme+=x;
      }
  })

  console.log("la somme est :",somme);
  
    
}

function affiche() {
    let ch1="sam";
    let ch2="tatrick";
    let ch="";
    ch=ch1[0].toUpperCase()+'.'+ch2[0].toUpperCase()
     console.log(ch);


}

//exercice 2



// function name() {
//     filter_arr = []; 


// let x=;
 
//   if x > 0:
    
  
// newarr = arr[filter_arr]

// console.log(newarr);

// }