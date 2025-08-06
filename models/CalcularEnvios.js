class calcularEnvios{
    pesoPaquete;
    distanciaEnvio;

    constructor(pesoPaquete, distanciaEnvio) {
        this.pesoPaquete = pesoPaquete;
        this.distanciaEnvio = distanciaEnvio;
    }

    calcularCostoTotal() {
        const costoBase = 50.00;
        const umbralPeso = 5;
        const recargoPorLbExtra = 20.00;
        const umbralDistancia = 50;
        const recargoPorKmExtra = 10.00;

        let recargoPeso = 0;

        if (this.pesoPaquete > umbralPeso) {
            const pesoExcedente = this.pesoPaquete - umbralPeso;
            recargoPeso = pesoExcedente * recargoPorLbExtra;
        }

        let recargoDistancia = 0;
        if (this.distanciaEnvio > umbralDistancia) {
            const distanciaExcedente = this.distanciaEnvio - umbralDistancia;
            recargoDistancia = distanciaExcedente * recargoPorKmExtra;
        }

        const costoTotal = costoBase + recargoPeso + recargoDistancia;

        return{
            costoBase: costoBase,
            recargoPeso: recargoPeso,
            recargoDistancia: recargoDistancia,
            costoTotal: costoTotal
        };
    }

    calcularFechaEntrega() {
        const hoy = new Date();
        const distanciaProcesamiento = 2;
        const diasTransporte = Math.ceil(this.distanciaEnvio / 100);
        const totalDias = distanciaProcesamiento + diasTransporte;

        hoy.setDate(hoy.getDate() + totalDias);

        const anio = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0');
        const dia = String(hoy.getDate()).padStart(2, '0');

        return `${anio}-${mes}-${dia}`;
    }
}

module.exports = calcularEnvios;