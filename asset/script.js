window.onload = function() { /* start when html is ready */
    
var btn0 = document.getElementById("nav-0");
var btn1 = document.getElementById("nav-1");
var btn2 = document.getElementById("nav-2");
var btn3 = document.getElementById("nav-3");
var btn4 = document.getElementById("nav-4");

var block1 = document.getElementById("block-contact");
var block2 = document.getElementById("block-boutique");
var block3 = document.getElementById("block-a-propos");
var block4 = document.getElementById("block-le-saviez-vous");

function topPage(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
function scrollToContact(){
    block1.scrollIntoView({behavior: 'smooth'});
}
function scrollToBoutique(){
    block2.scrollIntoView({behavior: 'smooth'});
}
function scrollToAPropos(){
    block3.scrollIntoView({behavior: 'smooth'});
}
function scrollToLeSaviezVous(){
    block4.scrollIntoView({behavior: 'smooth'});
}

btn0.addEventListener("click", topPage);
btn1.addEventListener("click", scrollToContact);
btn2.addEventListener("click", scrollToBoutique);
btn3.addEventListener("click", scrollToAPropos);
btn4.addEventListener("click", scrollToLeSaviezVous);
}