// Declarar variables utilizando los tipos básicos en TypeScript (string, number, boolean) y observar la inferencia de tipo

const nombre: string = "Frandy Jeffry Cepeda";

const edad: number = 20;

const estaActivo: boolean = true;

console.log(nombre, edad,  estaActivo);

// Practicar la declaración de variables con const y let, entendiendo cuándo utilizar cada uno.

let PI: number = 3.14;

let counter = 0;
counter++

console.log(PI, counter);

// Entender y aplicar los tipos unión para permitir múltiples tipos en una variable.

let identificador: number | string = 200;

identificador = "Ahora soy un numero";

console.log(identificador);

// Declarar un array y una tupla, comprendiendo sus diferencias y casos de uso.

const hobbies: string[] = ["Series", "Video Games", "Anime", "Music", "Gym"];

let usuario: [string, number];

usuario = ["Frandy", 20];


console.log(hobbies, usuario);

export{};