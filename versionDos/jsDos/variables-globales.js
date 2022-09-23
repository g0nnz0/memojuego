var modoRelax = false;

var movimientos = 0;

var cronometro;

var grupoTarjetas = [
  [["assetsDos/monster1.png"], ["assetsDos/monster2.png"]],
  [["assetsDos/monster3.png"], ["assetsDos/monster4.png"]],
  [["assetsDos/monster5.png"], ["assetsDos/monster6.png"]],
  [["assetsDos/monster7.png"], ["assetsDos/monster8.png"]],
];

var index = 0;

var nivelActual = 0;

var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 16,
  },
];
