//Escribimos los niveles dinamicamente:
escribeNiveles();

//Asignamos eventos iniciales:
document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciarJuegoNormal);

document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciarJuegoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);

document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".nivel").forEach(function (elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos la pantalla de bienvenida:
document.querySelector("#bienvenida").classList.add("visible");
