//Definir Tipos Básicos y Objetos

interface Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;
    estaDisponible: boolean;
}

//Array de la biblioteca

const biblioteca: Libro[] = [

];

//Hacemos una funcion par agregar los libros y los empujamos a la biblioteca con un push

const agregarLibro = (titulo:string, autor:string, añoPublicacion:number, estaDisponible: boolean) => {
const NuevoLibro: Libro = {
    titulo: titulo,
    autor: autor,
    añoPublicacion: añoPublicacion,
    estaDisponible: estaDisponible
}
biblioteca.push(NuevoLibro);
}

//Hacemos una función que busca dentro del array biblioteca con un for of y al final retornamos null sino encuentra nada.

const buscarLibroPorTitulo = (titulo: string): Libro | null => {
    for (const libro of biblioteca) {
        if (libro.titulo === titulo) {
            return libro; 
        }
    }
    return null; 
};

//Creamos una función que tendra un for y va a recorrer el array y con esto vamos a pedirle las informaciones necesarias para que imprima en pantalla.

const listarLibros = () => {
    for (const libro of biblioteca) {
        if (libro.estaDisponible) {
            console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año de publicación: ${libro.añoPublicacion}`);
        }
    }   
};

//Ponemos la información que se va a guardar en la biblioteca.

agregarLibro("El Hobbit", "J.R.R. Tolkien", 1937, true);
agregarLibro("1984", "George Orwell", 1949, true);

//Monstramos el libro "El Hobbit"

const libro = buscarLibroPorTitulo("El Hobbit");
console.log(libro);


//Mostrar libros disponibles

listarLibros();
