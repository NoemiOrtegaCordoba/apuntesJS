'use strict'

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

// For Each
lenguajes.forEach((elemento, indice) => {
	document.write("<li>" + indice + " - " + elemento + "</li>");
});

// For In
for (let lenguaje in lenguajes) {
	document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");