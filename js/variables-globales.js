var modoRelax = false;

var movimientos = 0;

var cronometro;

var grupoTarjetas = [
  ["๐", "๐"],
  ["๐", "๐งจ"],
  ["โจ", "๐"],
  ["๐", "๐"],
];

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
];
