const libros = [
    { "título": "Cien años de soledad", "autor": "Gabriel García Márquez", "año": 1967 },
    { "título": "El amor en los tiempos del cólera", "autor": "Gabriel García Márquez", "año": 1985 },
    { "título": "La hojarasca", "autor": "Gabriel García Márquez", "año": 1955 },
    { "título": "La mala hora", "autor": "Gabriel García Márquez", "año": 1962 },
    { "título": "Delirio", "autor": "Laura Restrepo", "año": 2004 },
    { "título": "La Virgen de los Sicarios", "autor": "Fernando Vallejo", "año": 1994 },
    { "título": "El olvido que seremos", "autor": "Héctor Abad Faciolince", "año": 2006 },
    { "título": "La tejedora de coronas", "autor": "Germán Espinosa", "año": 1982 },
    { "título": "La casa grande", "autor": "Álvaro Cepeda Samudio", "año": 1962 },
    { "título": "La marquesa de Yolombó", "autor": "Tomás Carrasquilla", "año": 1926 },
    { "título": "Cóndores no entierran todos los días", "autor": "Gustavo Álvarez Gardeazábal", "año": 1972 },
    { "título": "Rosario Tijeras", "autor": "Jorge Franco", "año": 1999 },
    { "título": "Satanás", "autor": "Mario Mendoza", "año": 2002 },
    { "título": "Vivir para contarla", "autor": "Gabriel García Márquez", "año": 2002 },
    { "título": "Los ejércitos", "autor": "Evelio Rosero", "año": 2006 },
    { "título": "La vorágine", "autor": "José Eustasio Rivera", "año": 1924 },
    { "título": "El coronel no tiene quien le escriba", "autor": "Gabriel García Márquez", "año": 1961 },
    { "título": "Sin remedio", "autor": "Antonio Caballero", "año": 1984 },
    { "título": "El otoño del patriarca", "autor": "Gabriel García Márquez", "año": 1975 },
    { "título": "Memoria por correspondencia", "autor": "Emma Reyes", "año": 2012 }
];

console.log(libros);

function libroNuevo (){
    alert("A continuación podrás ingresar un nuevo libro.");
    let title=prompt("Ingresa el título del libro: ");
    let author=prompt("Ingresa el autor del libro: ");
    let year=parseInt(prompt("Ingresa el año de publicación del libro: "));
    const libro={"título": title, "autor": author, "año": year};
    libros.push(libro);
    alert("El libro ha sido agregado con éxito")
};//Función para agregar un nuevo libro. Mediante un botón.


function filtrarLibros() {
    let autor = prompt("AUTORES\n 1. Gabriel García Márquez\n 2. Laura Restrepo\n 3.Fernando Vallejo\n 4. Héctor Abad Faciolince\n 5. Germán Espinosa\n 6. Álvaro Cepeda Samudio\n 7. Tomás Carrasquilla\n 8. Gustavo Álvarez Gardeazábal\n 9. Jorge Franco\n 10. Mario Mendoza\n 11.Evelio Rosero\n 12. José Eustasio Rivera\n 13. Antonio Caballero\n 14. Emma Reyes\n  Ingresa el nombre del autor:");
            let librosFiltrados = libros.filter(libro => libro.autor === autor);
            
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = JSON.stringify(librosFiltrados);
        }//Filtrar libros a partir de un autor ingresado por el usuario.

const cadenaJSON = JSON.stringify(libros);//Convierte el array en una cadena JSON
console.log("Array convertido a cadena JSON:", cadenaJSON);//Mostrar en consola
        
const fs = require('fs'); // Importar el módulo fs

// Leer la cadena JSON desde un archivo
fs.readFile('libros.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Ha ocurrido un error al leer el archivo:", err);
    } else {
        // Convertir la cadena JSON a objetos JavaScript
        const bibliotecaDesdeJSON = JSON.parse(data);
        console.log("La colección de libros ha sido leída desde 'libros.json':", bibliotecaDesdeJSON);
        }
});