let a=document.getElementById("txt");
let c=document.getElementById("btn");
// area.addEventListener("Keydown",myFunction);
let b=document.getElementById("area");
let d=document.getElementById("btn1");
btn1.addEventListener("click",myFunction1);
btn.addEventListener("click",myFunction);
let str=b.value;
// let arr=new array();
// let myList=document.createElement("ul");
// let li=document.createElement("li");
function myFunction(event){
    str=b.value;
    let upper=str.toUpperCase();
    // li.innerHTML=b.value;
    // myList.appendChild(li);
    // if(b.value!=null){
        // str=str+b.value+"<br>\n";
        console.log(str);
        a.innerHTML=upper+"<br>\n";
        b.value=upper;
        // window.prompt(b.value);
    // }
    
    
    
    
}
function myFunction1(event){
    let lower=str.toLowerCase();
    a.innerHTML=lower+"<br>\n";
    b.value=lower;
    
}