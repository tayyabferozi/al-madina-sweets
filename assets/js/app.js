var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".navbar");

hamburger.addEventListener("click", function(){
  if(nav.classList.contains("active")){
    nav.classList.remove("active");
  }
  else{
    nav.classList.add("active");
  }
});