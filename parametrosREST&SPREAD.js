'use strict'

// TODO: aprender en profundidad.

function listadoFrutas(fruta1, fruta2, ...ultimasFrutas) {
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(ultimasFrutas);
}

//! Parametros REST
listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

//! Parametros SPREAD
var primerasFrutas = ["Pomelo", "Pero"];

listadoFrutas(...primerasFrutas, "Albaricoque", "Níspero", "Piña", "Fresa");