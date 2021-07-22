//Codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado()


function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();

//Codigo triangulo

console.group("Triangulos")


function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
    
}


function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Codigo circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) *PI;
}

console.groupEnd();

// Interaccion con HTML

//Codigo Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

//Codigo Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = parseInt(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = parseInt(input2.value);

    const input3 = document.getElementById("InputTrianguloBase");
    const base =  parseInt(input3.value);


    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro)

}

function calcularAreaTriangulo(){

    const input3 = document.getElementById("InputTrianguloBase");
    const base =  parseInt(input3.value);

    const input4 = document.getElementById("InputTrianguloAltura");
    const altura = parseInt(input4.value);


    const area = areaTriangulo(base, altura);
    alert(area)

}

//Codigo Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)

}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = areaCirculo(value);
    alert(perimetro)
}

//Triangulo isosceles

function alturaIsosceles(lado1, lado2, base){
    let  altura = Math.sqrt((lado1 * lado1) - ((base/2) * (base/2)));
    alert("La altura de tu triangulo es:" + altura);
}

function validarTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alturaIsosceles(lado1, lado2, base);
    }
    else{
        alert("Las medidas que ingresaste no coinciden con las de un triangulo isosceles")
    }

}