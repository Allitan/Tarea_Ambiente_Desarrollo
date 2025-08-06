const CalcularEnvios = require('./models/CalcularEnvios');

const pesoPaquete = 12;
const distanciaEnvio = 250;

const miEnvio = new CalcularEnvios(pesoPaquete, distanciaEnvio);

module.exports = { miEnvio };