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



//Creadas
function perimetro_cuadrado(lado)
{
    let perimetro = lado * 4;
    return perimetro;
}
function area_cuadrado(lado)
{
    let area = lado * lado;
    return area;
}

// Interactuamos con el html
function calcularPerimetroCuadrado()
{
    let input = document.getElementById("input-cuadrado");
    let value = input.value;

    alert(perimetro_cuadrado(value));

}

function calcularAreaCuadrado()
{
    let input = document.getElementById("input-cuadrado");
    let value = input.value;

    alert(area_cuadrado(value));
}