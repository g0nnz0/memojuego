var grupoTarjetas = ["🎈", "🎆", "🎇", "🧨", "✨", "🎉", "🎊", "🎃"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(() => {
    return 0.5 - Math.random();
  });

  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");

  var tarjetasBarajadas = barajaTarjetas();

  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor=" +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  var descubiertas;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );
  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (descubiertas.length < 2) {
    return;
  }

  comparar(descubiertas);
}

function comparar(tarjetasAComparar) {
  if (
    tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
  ) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
}

function acierto(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function (elemento) {
    elemento.classList.remove("descubierta");
  });
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
