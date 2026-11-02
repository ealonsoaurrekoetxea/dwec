
const manejador = function(e){
    if (e.type == "mouseover"){
        document.getElementById("eventos").style.color = "red";
    } else {
        document.getElementById("eventos").style.color = "black";
    }
};

/*
const mensaje = function(e){
    if (e.target.id == "parrafo1"){
        alert("Parrafo 1 klik egin duzu");
    } else {
        alert("Parrafo 2 klik egin duzu");    
    }
};*/

const mensajeArray = function(e){
    alert(`${e.target.id}-en klik egin duzu`);
};

let ps = document.getElementsByTagName("p");

for(let i=0; i<ps.length; i++){
    ps[i].addEventListener("click", mensajeArray);
}

document.getElementById("parrafo1").addEventListener("click", mensaje);
document.getElementById("parrafo2").addEventListener("click", mensaje);

document.getElementById("eventos").addEventListener("mouseover", manejador);
document.getElementById("eventos").addEventListener("mouseout", manejador);