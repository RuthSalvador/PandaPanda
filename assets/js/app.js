window.addEventListener("load", function(){
var closeSpan = document.getElementsByClassName("close-span");

for (var i = 0; i < closeSpan.length; i++) {

  closeSpan[i].addEventListener("click" ,function(e){
  e.target.parentNode.setAttribute("class","oculto");

  })
}

})
