function finalizar() {
  if (nivelActual < niveles.length - 1) {
    document.querySelector("#subeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }

  document.querySelector("#main").classList.add("win-color");
}
