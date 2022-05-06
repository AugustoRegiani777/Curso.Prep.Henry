// No cambies los nombres de las funciones.

const { map } = require("../../07-JS-VI/homework/homework");

function crearUsuario() {
  // Crea una Clase de ES6 o una función conSstructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
 function Usuario (opciones){
  
  this.usuario = opciones.usuario;
  this.nombre = opciones.nombre;
  this.email = opciones.email;
  this.password = opciones.password; 
      
      
      }
     Usuario.prototype.saludar = function() {
        return 'Hola, mi nombre es ' + this.nombre; 
  }

  return Usuario;

}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:

Constructor.prototype.saludar = function () {

  return "Hello World!";}



 /* Constructor.prototype.saludar = function() {
    return 'Hello World!';
  }*/
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, 
  //pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

  
String.prototype.reverse = function(){
  // con este meto split transformo por ejempl un hola -> [H, O, L , A] despues llamo otro metodo que se llama REVERSE, que es un metodo establecido que devuevlve un arrey al reves. y despues la funcion Join le paso el parametro para juntarlos de nuevo
  return this.split('').reverse('').join('')  /*con este me refiero a la clase string*/
  
  // con split lo separamos, con reverse lo invertimos, y con join lo volvemos a juntar
  
}
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

    class Persona {
     constructor (nombre, apellido,edad, domicilio) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.domicilio= domicilio;
     }
     detalle () {
       return Persona.map;

     }
    }
  



  //class Persona {
    //constructor(nombre,apellido,edad,domicilio)/*Escribir los argumentos que recibe el constructor*/ {
      // Crea el constructor:
//definimos la palabra clave class, y dentro de esta el constructor que es el que me construye la cosa y como parametro recive todas las variables para definir los objetos, que eneste caso son 4 elementos, nombre, apellido edad y domicilio
//this.nombre /*aca dfeino el parametro*/= nombre /*aca defino el argumento*/
//this.apellido= apellido;
//this.edad = edad;
//this.domicilio = domicilio;
    
  //  detalle () 
    //  return {
      //  nombre:  this.nombre,
        //apellido: this.apellido,
        //edad: this.edad,
        //domicilio: this.domicilio // aca estoy definiendo un objeto con los valores del constructor.
     // }
   // }
 // }

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
// crear una nueva instancia del molde del ejercicio anterior, por lo que se crea eso. Una nueva instancia osea Persona, y usamos New
var persona = new Persona(nombre, apellido,edad,domicilio);
return persona;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  //tenemos que crear una nueva funcion para nuestra clase persona
  Persona.prototype.datos = function (){
    return this.nombre + ", "+ this.edad + " años";
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
