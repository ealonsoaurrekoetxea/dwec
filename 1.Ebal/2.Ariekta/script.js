const crearLimitadorIntentos = limit => {
    let intento = limit;

    return() => {
        if(intento > 0){
            intento--;
            console.log("Te quedan " + intento + " intentos");            
        } else {
            console.log("Acceso bloqueado: sin intentos");
        }
    }
}

const intentarLogin = crearLimitadorIntentos(3);

intentarLogin();
intentarLogin();
intentarLogin();
intentarLogin();
intentarLogin();