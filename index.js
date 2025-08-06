require('colors');
const { miEnvio } = require('./inicializacion');

const costos = miEnvio.calcularCostoTotal();
const fechaEntrega = miEnvio.calcularFechaEntrega();

console.log('***** Detalles del Envío: *****'.green);
console.log(`Peso del paquete: ${miEnvio.pesoPaquete} lbs`.blue);
console.log(`Distancia del envío: ${miEnvio.distanciaEnvio} km`.blue);
console.log(`Costo base: $${costos.costoBase.toFixed(2)}`.yellow);
console.log(`Recargo por peso: $${costos.recargoPeso.toFixed(2)}`.yellow);
console.log(`Recargo por distancia: $${costos.recargoDistancia.toFixed(2)}`.yellow);
console.log(`Costo total: $${costos.costoTotal.toFixed(2)}`.green);
console.log(`Fecha estimada de entrega: ${fechaEntrega}`.cyan);
console.log('*********************************'.green);