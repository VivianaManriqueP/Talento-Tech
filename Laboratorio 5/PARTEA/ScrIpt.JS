const objetoJSON = {
    "nombre": "Juan",
    "edad": 30,
    "esEstudiante": true
    }; //Crear un objeto JSON

console.log(objetoJSON);//Mostrar en la consola el objeto creado

const cadenaJSON = JSON.stringify(objetoJSON);//Lo convierte en una cadena JSON
console.log("Objeto convertido a cadena JSON:", cadenaJSON);//Mostrar en consola

const nuevoObjeto = JSON.parse(cadenaJSON);//Lo convierte de nuevo en objeto
console.log("Cadena JSON convertida a objeto:", nuevoObjeto);//Mostrar en consola

const estudiantes = [
    { "nombre": "Ana", "edad": 20, "esEstudiante": true },
    { "nombre": "Luis", "edad": 25, "esEstudiante": false },
    { "nombre": "Carlos", "edad": 22, "esEstudiante": true }
    ];//Crear un array de objetos

const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.esEstudiante); //Filtrar los datos del array estudiantes por aquellos que son estudiantes
console.log("Estudiantes filtrados:", estudiantesFiltrados);//Mostrar en consola

const nuevoEstudiante = { "nombre": "María", "edad": 23, "esEstudiante": true };//Crear un nuevo objeto
estudiantes.push(nuevoEstudiante);//Agrega el nuevo estudiante en el array
console.log("Nuevo listado de estudiantes:", estudiantes); //Mostrar en consola

const nuevoEstudiante2 = { "nombre": "Viviana", "edad": 34, "esEstudiante": true };//Crear un nuevo objeto
estudiantes.push(nuevoEstudiante2);//Agrega el nuevo estudiante en el array
console.log("Nuevo listado de estudiantes:", estudiantes); //Mostrar en consola

const estudiantesVeintiuno = estudiantes.filter(estudiante => estudiante.edad>21); //Filtrar los datos del array estudiantes por aquellos que son estudiantes
console.log("Estudiantes filtrados:", estudiantesVeintiuno);//Mostrar en consola

const cadenaJSON2 = JSON.stringify(estudiantes);//Convierte el array en una cadena JSON
console.log("Array convertido a cadena JSON:", cadenaJSON2);//Mostrar en consola

const nuevaCadena = JSON.parse(cadenaJSON2);//Lo convierte de nuevo en array
console.log("Cadena JSON convertida en array:", nuevaCadena);//Mostrar en consola