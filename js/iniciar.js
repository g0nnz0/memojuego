function iniciar() {
  movimientos = 0;

  reparteTarjetas(niveles[nivelActual].tarjetas);

  document.querySelector("#mov").innerText = "00";

  maxContador();
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#main").classList.remove("win-color");

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  //iniciarCronometro();
}

function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}
iniciar();

document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", reiniciar);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
