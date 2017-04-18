window.addEventListener("load", function(){

  var closeSpan = document.getElementsByClassName("close-span");
    for (var i = 0; i < closeSpan.length; i++) {
      closeSpan[i].addEventListener("click", function(e){
        e.target.parentNode.classList.add("oculto");
      })
    }

  var restaurar = document.getElementById('click-restaurar');
    restaurar.addEventListener("click", function(){
      for (var i = 0; i < closeSpan.length; i++){
        closeSpan[i].parentNode.classList.remove("oculto");
      }
    })

  var divTexto = document.getElementsByClassName("texto");
  var idOrigen = document.getElementById("click-origen");
  var idExtincion = document.getElementById("click-extincion");

    idOrigen.addEventListener("click", function(){
      divTexto[0].classList.toggle("sin-visual");
    })

    idExtincion.addEventListener("click", function(){
      divTexto[1].classList.toggle("sin-visual");
    })

})
