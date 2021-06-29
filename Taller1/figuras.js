//Cuadrado

console.group("Cuadrado");

function cuadrado(lado , medida)
{
    // Perímetro
    let perimetro = lado * 4;
    let area = lado * lado;

    console.log("El perímetro del cuadrado es: " + perimetro + " " + medida);
    console.log("El area del cuadrado es: " + area + " " + medida +"^2");
}

console.groupEnd();

//Triangulo

console.group("Triangulo");

function Triangulo(lado1, lado2, base, altura, medida)
{
    // Perímetro
    let perimetro = lado1 + lado2 + base;
    let area = (base * altura) / 2;

    console.log("El perímetro del triangulo es: " + perimetro + " " + medida);
    console.log("El area del triangulo es: " + area +  " " + medida + "^2");
}

console.groupEnd();

//Circulo

console.group("Circulo");

function circulo(radio, medida)
{
    // Perímetro
    let circunferencia = 2 * Math.PI * radio; 
    let area = Math.PI * radio * radio;

    console.log("La circunferencia del circulo es: " + perimetro + " " + medida);
    console.log("El area del triangulo es: " + area +  " " + medida + "^2");
}

console.groupEnd();