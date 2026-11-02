const formulario = document.getElementById("registro");
const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const edad = document.getElementById("edad");
const botonComprobar = document.getElementById("comprobar");

const validarUsuario = function () {
    usuario.setCustomValidity("");
    if (usuario.validity.valueMissing) {
        usuario.setCustomValidity("Erabiltzailea derrigorrezkoa da");
    } else if (usuario.validity.tooShort) {
        usuario.setCustomValidity("Erabiltzaileak 4 karaktere baino gehiago izan behar du");
    } else if (usuario.validity.patternMismatch) {
        usuario.setCustomValidity("Letrak, zenbakiak eta espazioak baino ez");
    }
}

const validarEdad = function () {
    //...
}

const comprobar = function () {
    validarUsuario();
    //validarEdad();
    formulario.reportValidity();
}

const enviar = function (e) {
    if (formulario.checkValidity() == false){
        e.preventDefault();
        formulario.reportValidity();
    } else {
        e.preventDefault();
        alert("OK!");
    }
}

botonComprobar.addEventListener("click", comprobar);
formulario.addEventListener("submit", enviar);