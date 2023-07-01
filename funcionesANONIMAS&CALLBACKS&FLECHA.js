'use strict'

// TODO: aprender en profundidad.

//! Funciones anonimas
// Es una función que no tiene nombre y por tanto las puedo guardar en una variable
var pelicula = function (nombre) {
	return "La película es: " + nombre;
}
console.log(pelicula("Titanic"));

//! Callbacks 
// Como en JS las funciones son objetos puedo pasar funciones como parámetros a otras funciones y llamarlas dentro de las funciones externas
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

// Función flecha
sumame(5, 7, dato => {
	console.log("La suma es:", dato);
},
	function (dato) {
		console.log("La suma por dos es:", (dato * 2));
	});