function iniciar() {
  movimientos = 0;

  reparteTarjetas(niveles[nivelActual].tarjetas);

  document.querySelector("#mov").innerText = "00";

  maxContador();

  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (!modoRelax) {
    iniciarCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar() {
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciarJuegoNormal() {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciarJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}

/*iniciar();

document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", reiniciar);
});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);
*/
