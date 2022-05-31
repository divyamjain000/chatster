let a=document.getElementById("txtarea");
let c=document.getElementById("btn");
let b=document.getElementById("area");
document.getElementById("area").addEventListener("keyup",function(e){
    if(e.keyCode==13){ 
        document.getElementById("btn").click();}});
btn.addEventListener("click",myFunction);
let str=b.value;
// let arr=new array();
// let myList=document.createElement("ul");
// let li=document.createElement("li");
function myFunction(event){
    
    // li.innerHTML=b.value;
    // myList.appendChild(li);
    // if(b.value!=null){
        // str=str+b.value+"<br>\n";
        // a.innerHTML=str;
        if(str=="clear()"){
            a.innerHTML=null;
            b.value=null;
        }
        else{

            str=str+b.value;
            
            console.log(str+"<br>\n");
            a.innerHTML=str+'\r\n';
            b.value=null;
        }
        // window.prompt(b.value);
    // }
    
    
    
    
}
function myFunction1(event){
    let lower=str.toLowerCase();
    a.innerHTML=lower+"<br>\n";
    b.value=lower;
    
}