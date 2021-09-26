//assign dom elements to btns with numbers and signs
const num0 = document.querySelector('.btn0');
const num1 = document.querySelector('.btn1');
const num2 = document.querySelector('.btn2');
const num3 = document.querySelector('.btn3');
const num4 = document.querySelector('.btn4');
const num5 = document.querySelector('.btn5');
const num6 = document.querySelector('.btn6');
const num7 = document.querySelector('.btn7');
const num8 = document.querySelector('.btn8');
const num9 = document.querySelector('.btn9');
const numdel = document.querySelector('.btndel');
const numplus = document.querySelector('.btnplus');
const numminus = document.querySelector('.btnminus');
const numdiv = document.querySelector('.btndiv');
const nummul = document.querySelector('.btnMul');
const clear = document.querySelector('.btnClc');
const clearAll = document.querySelector('.btnClcAll');
const tog = document.querySelector('.btntog');
let count1 = document.querySelector(".numone");
let count2 = document.querySelector(".numtwo");
let signCount = document.querySelector(".sign");


let arr = [];
num0.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "0";
        }else{
            document.querySelector(".numone").textContent += "0";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "0";
        }else{
            document.querySelector(".numtwo").textContent += "0";
        }  
    }
   
})
num1.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "1";
        }else{
            document.querySelector(".numone").textContent += "1";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "1";
        }else{
            document.querySelector(".numtwo").textContent += "1";
        }  
    }
})
num2.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "2";
        }else{
            document.querySelector(".numone").textContent += "2";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "2";
        }else{
            document.querySelector(".numtwo").textContent += "2";
        }  
    }
})
num3.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "3";
        }else{
            document.querySelector(".numone").textContent += "3";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "3";
        }else{
            document.querySelector(".numtwo").textContent += "3";
        }  
    }
})
num4.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "4";
        }else{
            document.querySelector(".numone").textContent += "4";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "4";
        }else{
            document.querySelector(".numtwo").textContent += "4";
        }  
    }
})
num5.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "5";
        }else{
            document.querySelector(".numone").textContent += "5";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "5";
        }else{
            document.querySelector(".numtwo").textContent += "5";
        }  
    }
})
num6.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "6";
        }else{
            document.querySelector(".numone").textContent += "6";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "6";
        }else{
            document.querySelector(".numtwo").textContent += "6";
        }  
    }
})
num7.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "7";
        }else{
            document.querySelector(".numone").textContent += "7";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "7";
        }else{
            document.querySelector(".numtwo").textContent += "7";
        }  
    }
})
num8.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "8";
        }else{
            document.querySelector(".numone").textContent += "8";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "8";
        }else{
            document.querySelector(".numtwo").textContent += "8";
        }  
    }
})
num9.addEventListener('click',function(){
    if(signCount.textContent === ''){
        if(count1.textContent === ""){
            document.querySelector(".numone").textContent = "9";
        }else{
            document.querySelector(".numone").textContent += "9";
        }  
    }
    else{
        if(count2.textContent === ""){
            document.querySelector(".numtwo").textContent = "9";
        }else{
            document.querySelector(".numtwo").textContent += "9";
        }  
    }
})
//eventlistens to clear buttons
clearAll.addEventListener('click',function(){
    if(count1.textContent != "" || count2.textContent != ""){
        document.querySelector(".numone").textContent = "";
        document.querySelector(".numtwo").textContent = "";
        document.querySelector(".sign").textContent = '';
        document.querySelector(".answer").textContent = '';
    }
})
clear.addEventListener('click',function(){

    let name =  document.querySelector(".numone").textContent.slice(0,count1.textContent.length-1);
    let name2 = document.querySelector(".numtwo").textContent.slice(0,count2.textContent.length-1);
   
    if (signCount.textContent === "") {
        document.querySelector(".numone").textContent = name ;
    }
     if (signCount.textContent === "+"|| signCount.textContent ==="-" || signCount.textContent ==="/" || signCount.textContent ==="x"){
        document.querySelector(".numtwo").textContent = name2;
    }
    
})
//eventlistens to toggle button
tog.addEventListener('click',function(){ 
    let convNum = Number (count1.textContent);
    let convNum2 = Number (count2.textContent);
    if (signCount.textContent === "") {
        if(convNum > 0 || convNum < 0){
            convNum=convNum*(-1);
            document.querySelector(".numone").textContent = convNum;
        }
    }
    else{
        if(convNum2 > 0 || convNum2 < 0){
            convNum2=convNum2*(-1);
            document.querySelector(".numtwo").textContent = convNum2;
        }
    }
    
    
})

//eventlistens to signs
numplus.addEventListener('click',function(){
    document.querySelector(".sign").textContent = "+";

})
numminus.addEventListener('click',function(){
    document.querySelector(".sign").textContent = "-";
})
numdiv.addEventListener('click',function(){
    document.querySelector(".sign").textContent = "/";
})
nummul.addEventListener('click',function(){
    document.querySelector(".sign").textContent = "x";
})


//calculations for

const equaltoo = document.querySelector(".btnequals");
equaltoo.addEventListener('click',function(){
    arr[0] = Number.parseInt(count1.textContent);
    arr[1] = Number.parseInt(count2.textContent);
    let ans = document.querySelector(".answer")
    if(signCount.textContent === "+"){
        ans.textContent = (arr[0]+arr[1]).toString();
    }
    else if(signCount.textContent === "-"){
        ans.textContent = (arr[0]-arr[1]).toString();
    }
    else if(signCount.textContent === "/"){
        ans.textContent = (arr[0]/arr[1]).toString();
    }
    else if(signCount.textContent === "x"){
        ans.textContent = (arr[0]*arr[1]).toString();
    }
})