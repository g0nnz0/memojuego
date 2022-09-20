var grupoTarjetas = ["🎈", "🎆", "🎇", "🧨", "✨", "🎉", "🎊", "🎃"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");

  mesa.innerHTML = "";

  totalTarjetas.forEach(function (elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});
