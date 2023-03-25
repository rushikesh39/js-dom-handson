// Game
let checkNum=document.querySelector('input');
let btncheck=document.getElementById('check');
let gess=document.getElementById('gess');
let para=document.getElementsByClassName('para');
let displayNumber=document.getElementById('displayNumber');
let color=document.getElementById('game');
// console.log("random",randomNumber);
let randomNumber = Math.floor(Math.random()*100);
let countNumber= 99;
let score=1;
function getInput() {
    
    let n=parseInt( checkNum.value);
        
    console.log('number',n);
    console.log('r',randomNumber);
    if(randomNumber < n){
        gess.innerText="Number is high";
        para[0].innerText=`Chances: ${countNumber}`;
        para[1].innerText=`HighScore: ${score}`;
        score++;
        countNumber--;

        
     }
    else if(randomNumber > n){
        
        gess.innerText="Number is low";
        para[0].innerText=`Chances: ${countNumber}`;
        para[1].innerText=`HighScore: ${score}`;
        score++;
        countNumber--;
        
    }
    else{
    gess.innerText='Hurray You Won';
    displayNumber.innerText=randomNumber;
    color.setAttribute('style','background-color:rgb(10, 6, 82)');
                
    }

    
}  
// btncheck.addEventListener('click',()=>{
//     console.log('number',n);
//     console.log("random",randomNumber);
//     if(randomNumber < n){
//         gess.innerText="Number is high";
//         count--;
//         para[0].innerText='Chance',count;
//     }
//     else if(randomNumber < n){
//         gess.innerText="Number is low";
//         count--;
//         para[1].innerText='Chance',count;
//     }
//     // else{
//     //     gess.innerText='Hurray You Won';
        
//     // }
// })

// function getInput() {
//     var inputElement = document.getElementById("input-number");
//     var inputValue = parseInt(inputElement.value);
  
//     console.log("The input value is: " + inputValue);
//   }