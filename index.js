document.getElementById("heading").style.color="#757575";
document.getElementById("heading").style.backgroundColor="#e2e2e2";
document.getElementById("intro").innerHTML="My name is Loice Mwau studying software engineering"
document.getElementById("intro").style.fontSize="36px"
// document.getElementsByTagName("div")
let paragraph=document.createElement("p")
paragraph.innerHTML="I am new "
document.getElementById("container").appendChild(paragraph)
// checking the children
let child=document.getElementById("container").children
console.log({child});
document.getElementById("button").style.padding="10px 30px 10px 30px"
document.getElementById("button").style.borderStyle="none"
let button=document.getElementById("button")
button.addEventListener("click", function(){
    button.innerHTML="clicked!!!"
})
// document.getElementById("container").removeChild(paragraph)
// setting attributes
document.getElementById("container").setAttribute("class","containers")
// takes the qualified name(class or id) and its value

