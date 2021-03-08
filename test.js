// ex1

var tableau = [];
var s = 0;
var m = 0;
var nb=0;
function myFunction() {
  
    let a = document.getElementById("input0").value;
     nb=parseInt(a)
    tableau.push(nb);
    // const a =Math.floor(Math.random()*10);
document.getElementById("span").innerHTML=nb ;

  
console.log(nb);
}
function Moyen() {
    var somme=0;
  tableau.forEach((x) => {
      console.log(x);
      if(x>0){
        somme+=x;
      }
  })
  
    m = s / tableau.length;
    console.log(m);
    let max=Math.max(...tableau);
    console.log(max);
}

  

    function pair(){
        var nbr;
        nbr = Number(document.getElementById("input0").value);
        if(nbr%2 == 0)
        {
               alert(nbr);

        }
    }

    // ex2
    const names = ['Ali', 'Atta', 'Alex', 'John'];
    var vowels = ["a", "e", "i", "o", "u"]; 
    function LetterChanges(str) {

        var c = str.split("");
         
        if (c == vowels) {
           vowels.toUpperCase();}
           console.log(c);


     
     }

     function fonc( ) 
{
   let som=0;
//   let t=[];
for (let index = 0; index < 5; index++) {
   
    var x= prompt("please enter a number")  
    som= parseInt(x);
   
}
console.log(som); 

}


