var ingresoMensual = 0;
var mesesAhorro = 0;
var porcentajeAhorro = 0;

// funcion para capturar los datos ingresados en la pg

function calcularAhorro(){
    ingresoMensual = document.getElementById("ingresoMensual");
    const ingreso = ingresoMensual.value;

    mesesAhorro = document.getElementById("meses");
    const meses = mesesAhorro.value;

    porcentajeAhorro = document.getElementById("porcentaje");
    const porcentaje = porcentajeAhorro.value;

    const restoParaAhorrar = (porcentaje / 100) * ingreso; 
    const ahorroTotal = restoParaAhorrar * meses;

    //Mostramos el ahorro total al final de los meses ingresados
    
    const parrafoAhorro = document.getElementById("ahorroNegritas");
    parrafoAhorro.innerText = "El ahorro total por:" + meses + " meses es:" + ahorroTotal;

    //Mostramos el resto del ingreso mensual
    const restoMensual = ingreso - restoParaAhorrar;
    const parrafoRestoMensual = document.getElementById("restoNegritas");
    parrafoRestoMensual.innerText = "El resto que le quedara despues de quitar el ahorro es de:" + restoMensual;
    


}