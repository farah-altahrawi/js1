var frontend = document.querySelector(".frontend");
var smallerbtn = document.querySelector(".smallerbtn");
var largerbtn = document.querySelector(".largerbtn");

function largerfont(){
    frontend.classList.remove("smaller-font");
    frontend.classList.add("larger-font");

}
 function smallerfont(){
    frontend.classList.remove("larger-font");
    frontend.classList.add("smaller-font");

 }

 largerbtn.onclick = largerfont;
 smallerbtn.onclick = smallerfont;



