/*Funcion Pintar*/

const volverOriginal = document.getElementById("ele1");

function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

volverOriginal.addEventListener("click", function () {
  pintar(volverOriginal, "yellow");
});

pintar(volverOriginal); //para colocar el color por defecto

/*Fin Funcion Pintar*/
