var closeSpan = document.getElementsByClassName("close-span");

for (var i = 0; i < closeSpan.length; i++) {
  closeSpan[i].addEventListener("click" ,function(e){

    divIma.setAttribute("class","oculto");

  })
}
