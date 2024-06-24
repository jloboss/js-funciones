//Declaracion de Variables
const color_rosado = "#F9CCCA";
const color_naranjo = "#FF7F00";
const color_celeste = "#77B5FE";
const color_morado = "#4A2364";
const color_gris = "#96989A";
const color_cafe = "#3F2212";

// Cambia el color de la caja
function cambiarColor(elemento, color) {
  elemento.style.backgroundColor = color;
}

//Crea la caja y le asigna el color
crearCaja = (letra, color) => {
  const container = document.querySelector("#key");
  const caja = document.createElement("div");   
  caja.id = "color-caja" + letra;
  caja.textContent = letra;
  container.appendChild(caja);
  cambiarColor(caja, color);
};

//Elimina la caja si existe
eliminarCaja = (color_id) => {
  const container = document.querySelector("#key");
  let elemento = document.getElementById(color_id);
  container.removeChild(elemento);
};

//Valida colres al presionar las teclas
document.addEventListener("keydown", function (event) {
  elemento = document.querySelector("#color-caja");
  if (event.key === "a") {
    cambiarColor(elemento, color_rosado);
  } else if (event.key === "s") {
    cambiarColor(elemento, color_naranjo);
  } else if (event.key === "d") {
    cambiarColor(elemento, color_celeste);
  } else if (event.key === "q") {
    if (!document.getElementById("color_morado")) crearCaja("q", color_morado);
    else {
      eliminarCaja("color_morado");
    }
  } else if (event.key === "w") {
    if (!document.getElementById("color_gris")) crearCaja("w", color_gris);
    else {
      eliminarCaja("color_gris");
    }
  } else if (event.key === "e") {
    if (!document.getElementById("color_cafe")) crearCaja("e", color_cafe);
    else {
      eliminarCaja("color_cafe");
    }
  }
});
