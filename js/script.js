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
  var totalDescubiertas = document.querySelectorAll(".descubierta");
  if (totalDescubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");

  var descubiertas = document.querySelectorAll(".descubierta");

  if (descubiertas.length < 2) {
    return;
  }

  if (descubiertas[0].dataset.valor === descubiertas[1].dataset.valor) {
    console.log("acierto");
  } else {
    console.log("error");
  }
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
