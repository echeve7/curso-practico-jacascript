function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            
            return valorAcumulado + nuevoElemento;

    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
 

}


//const lista1 = [100, 200, 500, 40000000];

const mitadLista = parseInt(lista1.length / 2);

function esPar(numero){
    if(numero % 2 === 0){

        return true;
    }else{

        return false}
}

let mediana;
function calcular (lista){
    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
    }else{
        mediana = lista.length[mitadLista]
    }
}

//Aqui empieza

function ordenarLista(lista){
    let cambio = 0;

   for(let x = 0; x < lista.length; x++){
        for(let i = 0; i < lista.length; i++){
            if(lista[i] < lista[i + 1]){
                cambio = lista[i+1];
                lista[i + 1] = lista[i];
                lista[i] = cambio;
            }
        }
    }
    calcular(lista);
}