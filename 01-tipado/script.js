// Tipado dinámico
let x = 42;
console.log("Valor de x:", x);
console.log("Tipo de x:", typeof x);

x = "ahora soy un texto";
console.log("Nuevo valor de x:", x);
console.log("Nuevo tipo de x:", typeof x);

// Tipado débil
let resultado1 = "5" + 3;
console.log('"5" + 3 =', resultado1);

let resultado2 = 5 + "3";
console.log("5 + '3' =", resultado2);

let resultado3 = 5 + 3;
console.log("5 + 3 =", resultado3);

x = true;
console.log(typeof x);

x = null;
console.log(typeof x);

x = undefined;
console.log(typeof x);

resultado1 = "5" * 3;
console.log('"5" * 3 =', resultado1);

let y = "10";
resultado1 = y + 2;
console.log('y + 2 =', resultado1);