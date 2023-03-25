// Q1
let element = document.getElementById("text");
console.log(element.innerText);

// Q2
let tagname=document.getElementsByTagName('h1');
console.log(tagname[0].innerText);
// Q3
let clasname=document.getElementsByClassName('box');
console.log(clasname[0].innerText);
// Q4
function callMe(){
    let value=document.getElementById('q4');
    value.innerText="Hello World!!"
}
// Q5
function clickMe(){
    let mytext=document.getElementById('q5');
    mytext.innerText="Welcome to Elevation academy";
}
//Q6
let text6=document.getElementById('q6');
text6.setAttribute('style','color:red')
// Q7
let parent=document.getElementsByClassName('parent');
let btn=document.getElementById("direction");

let count=0;
btn.addEventListener('click',()=>{
if(count%2===0){
    parent[0].setAttribute('style','flex-direction: column');
    count++;
}
else{
    parent[0].setAttribute('style','flex-direction: row');
    count++;
}
})
// Q9
let clockTime=document.getElementById('q9');
function clock(){
    let date= new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let time=`${h} : ${m} : ${s}`;
    
    clockTime.innerText=time;
}
setInterval(()=>{
    clock();
},1000)

