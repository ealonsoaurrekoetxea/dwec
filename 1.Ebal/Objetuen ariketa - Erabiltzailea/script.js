let erabiltzailea1 = new Erabiltzaile("Juan", "Perez", "12345678A", 1990, "Madrid");
let erabiltzailea2 = new Erabiltzaile("Maria", "Garcia", "87654321B", 1985, "Barcelona");
let erabiltzailea3 = new Erabiltzaile("Pedro", "Lopez", "56789012C", 2000, "Valencia");
let erabiltzailea4 = new Erabiltzaile("Ana", "Martinez", "34567890D", 1995, "Sevilla");
let erabiltzailea5 = new Erabiltzaile("Luis", "Gonzalez", "23456789E", 1980, "Bilbao");

console.log(erabiltzailea1.toString());
console.log(erabiltzailea2.toString());
console.log(erabiltzailea3.toString());
console.log(erabiltzailea4.toString());
console.log(erabiltzailea5.toString());

document.getElementById("erabiltzaileak").innerHTML += erabiltzailea1.toHTML();
document.getElementById("erabiltzaileak").innerHTML += erabiltzailea2.toHTML();
document.getElementById("erabiltzaileak").innerHTML += erabiltzailea3.toHTML();
document.getElementById("erabiltzaileak").innerHTML += erabiltzailea4.toHTML();
document.getElementById("erabiltzaileak").innerHTML += erabiltzailea5.toHTML();


