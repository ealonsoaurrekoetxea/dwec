window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("calcular").addEventListener("click", calcularFechas);
}

function calcularFechas(){
    const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
    
    let n_mes_presente = meses.indexOf(document.getElementById("presenteMes").value);
    let n_dia_presente = document.getElementById("presenteDia").value;
    let n_ano_presente = document.getElementById("presenteAno").value;
    let n_hora_presente = document.getElementById("presenteHora").value;
    let n_min_presente = document.getElementById("presenteMinuto").value;

    let presente = new Date(n_ano_presente, n_mes_presente, n_dia_presente, n_hora_presente, n_min_presente);

    let n_mes_destino = meses.indexOf(document.getElementById("destinoMes").value);
    let n_dia_destino = document.getElementById("destinoDia").value;
    let n_ano_destino = document.getElementById("destinoAno").value;
    let n_hora_destino = document.getElementById("destinoHora").value;
    let n_min_destino = document.getElementById("destinoMinuto").value;

    let destino = new Date(n_ano_destino, n_mes_destino, n_dia_destino, n_hora_destino, n_min_destino);

    let dif = destino - presente;

    let tipo_dif = 0;

    if (dif < 0) {
        tipo_dif = -1;
    } else if (dif > 0) {
        tipo_dif = 1;
    }

    dif = Math.abs(dif);

    dif /= 1000 * 60;

    let dif_min = dif % 60;
    
    dif = Math.floor(dif/60);
    
    let dif_h = dif % 24;

    dif = Math.floor(dif/24);

    let dif_dia = dif % 365;

    let dif_ano = Math.floor(dif/365);

    switch (tipo_dif){
        case 0:
            mensaje.textContent = "Bi datak berdinak dira."; 
            break;
        
        case 1:
            mensaje.textContent =  "Etrkisunera " + dif_ano + " urte, " + dif_dia + " egun, " + dif_h + " ordu  eta " + dif_min + " minutu bidaiatuko dituzu.";
            break;
        case -1:
            mensaje.textContent =  "Iraganera " + dif_ano + " urte, " + dif_dia + " egun, " + dif_h + " ordu  eta " + dif_min + " minutu bidaiatuko dituzu.";
    }
}