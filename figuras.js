//Codigo del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");
console.groupEnd();
//Codigo triangulo

console.group("Triangulos")

const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 6.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo mide: " + areaTriangulo + "cm2");

console.groupEnd();

//Codigo circulo
console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es:" + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es:" + diametroCirculo + "cm");
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es:" + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es:" + areaCirculo + "cm2");

console.groupEnd();