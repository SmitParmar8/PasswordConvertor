let btn = document.querySelector("button");
let generatebox = document.querySelector(".generate-box");
let cpbtn = document.querySelector(".copybtn");
let inputbox = document.querySelector("input");
btn.addEventListener("click",()=>{
    generatebox.style.display = "block"
    inputbox.value="";
})
cpbtn.addEventListener("click",()=>{
    alert("text copied to clipboard")
    generatebox.style.display= "none"
})
