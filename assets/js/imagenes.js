window.addEventListener("load", function(){

  var imagenes = ["panda adulto", "rostro del panda", "panda en arbol", "panda saludando"];

  function addImage(array){
    array.forEach(function(e){
      var imagenesPanda = document.getElementById("imagenes-panda");

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/"+ e + ".jpg");
      image.setAttribute("title", e);
      image.setAttribute("class","img-panda");
      imagenesPanda.appendChild(image);

    })
  };
  addImage(imagenes);

})
