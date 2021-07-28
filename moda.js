//const lista1 =[1,2,3,4,5,6,5,7,7,7,7];

const lista1Count = {};

/*Metodo map, iteracion de un arreglo, creando un objeto mediante clave valor. 
Cada que se lee un numero nuevo se guarda su clave y si no tiene ningun valor se le da 1
si a la siguiente iteracion sale el mismo numero=Clave  se le suma su valor actual mas  1
Mediante este codigo se sabra cuantas veces se repite cada elemento*/

function capturarArreglo(lista1){
    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
            } else{
                lista1Count[elemento] = 1;
            }
        }

    );
    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
    
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    console.log("La moda es: " + moda[0] + ", Se repite: " + moda[1] + " veces");
}

/* el metodo sort lo que hace es iterar el arreglo para ordenarlo, si nosotros retornamos
un numero este lo utilizara dependiendo de si retornamos un 0" los numeros no se moveran
pues significa que son el mismo numero", si ternos un numero positivo "significa que
el numero ValorAcumulado es mayo que el otro numero y valorAcumulado tomara una pocision
adelante del otro numero ya que van de menor a mayor", si retorna un numero negativo 
ValorAcumulado queda antes que en nuevoValor*/
