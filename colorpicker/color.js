let button1El = document.getElementById("button1");
let button2El = document.getElementById("button2");
let button3El = document.getElementById("button3");
let button4El = document.getElementById("button4");

let secColorEl = document.getElementById("secColor");
let selectedColorEl = document.getElementById("selectedColor");


function green(){
secColorEl.style.backgroundColor = "green";
selectedColorEl.textContent = "Green";
selectedColorEl.style.color= "purple"
}

function red(){
    secColorEl.style.backgroundColor = "#FF0000"
selectedColorEl.textContent = "#FF0000";
selectedColorEl.style.color= "purple"
}

function black(){
    secColorEl.style.backgroundColor = "black"
selectedColorEl.textContent = "black";
selectedColorEl.style.color= "purple"    
}

function blue(){
    secColorEl.style.backgroundColor = "blue"
selectedColorEl.textContent = "blue";
selectedColorEl.style.color= "purple"  
}