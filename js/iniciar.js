function iniciar() {
  movimientos = 0;

  reparteTarjetas();

  document.querySelector("#mov").innerText = "00";
  document.querySelector("#feedback").classList.remove("visible");
  document.querySelector("#main").classList.remove("win-color");

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  //iniciarCronometro();
}

iniciar();

document.querySelector("#reiniciar").addEventListener("click", iniciar);
