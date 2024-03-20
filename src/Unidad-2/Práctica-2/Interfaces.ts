//Definir una Interfaz para un Personaje

interface Personaje {
    nombre: string;
    vida: number;
    habilidades: string[];
    pueblo?: string;
};

const Frandy: Personaje = {
    nombre: "Frandy Jeffry Cepeda",
    vida: 10000,
    habilidades: ["Volar", "Teletransportación", "Level Up", "Robo de habilidades"],
    pueblo: "Planeta tierra",
};

//Interfaz para Objetos con Propiedades Anidadas

interface Libro {
    titulo: string;
    añoDePublicación: number;
    autor: {
        nombre: string;
        nacionalidad: string;
    }
};

const Libro: Libro = {
    titulo: "Harry Potter y la piedra filosofal",
    añoDePublicación: 1997,
    autor: {
        nombre: "J.K. Rowling",
        nacionalidad: "Británica"
    }
};

//Interfaz para Arrays de Objetos

interface Empleados {
    empleados: {
        nombre: string[],
        id: number[]
        departamento: string[]
    }
};

const Empleados: Empleados = {
    empleados: {
        nombre: ["Frandy", "Miguel", "Rogelio"],
        id: [1, 2, 3],
        departamento: ["Informática", "Préstamos", "Finanzas"]

    }
};

//Extender Interfaces

interface PersonajeExtendido extends Personaje {
    experiencia: number;
}

const FrandyExtendido: PersonajeExtendido = {
    nombre: "Frandy Jeffry Cepeda",
    vida: 10000,
    habilidades: ["Volar", "Teletransportación", "Level Up", "Robo de habilidades"],
    pueblo: "Planeta Tierra",
    experiencia: 5000
};

//Interfaz con Métodos

interface CuentaBancaria {
    saldo: number;
    métodoDeposito: string;
}

const CuentaBancaria: CuentaBancaria = {
    saldo: 500,
    métodoDeposito: "Transferencia"
};

console.log(Frandy, Libro, Empleados, FrandyExtendido ,CuentaBancaria )

export{};