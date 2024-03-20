//Definición Básica de Función

const sumar = (a:number, b:number) => {
    return a + b;
}

const Resultado = sumar(2,2);

console.log(Resultado);

//Parámetros Opcionales

function Numeros(a:number, b?:number) {
return [a, b];
}

const Resultado2 = Numeros(5);

console.log(Resultado2);

//Valor por Defecto para Parámetros

const Multiplicar = (a:number, b:number) => {
return a * b
}

const Resultado3 = Multiplicar(5,10);

console.log(Resultado3);

//Tipos de Retorno

function String (a:number, b:number) {
    return a + b;
};

let resultado4:string = String(10, 4).toString();

console.log(resultado4);

export{};