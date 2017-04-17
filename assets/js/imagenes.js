window.addEventListener("load", function(){

  var imagenes = ["panda adulto", "rostro del panda", "panda en arbol", "panda saludando"];

  function addImage(array){
    array.forEach(function(e){
      var imagenesPanda = document.getElementById("imagenes-panda");

      var divIma = document.createElement("div")
      divIma.setAttribute("class","div-panda");
      imagenesPanda.appendChild(divIma);

      var image = document.createElement("img");
      image.setAttribute("src","assets/img/"+ e + ".jpg");
      image.setAttribute("title", e);
      image.setAttribute("class","img-panda");
      divIma.appendChild(image);

      var spanX = document.createElement("span");
      spanX.setAttribute("name", "close-span");
      divIma.appendChild(spanX);

      spanX.appendChild(document.createTextNode("x"));

    })
  };
  addImage(imagenes);

})
