const user = function(e){
    let txt = e.target.value;
    if(txt.length < 7 || txt.length > 15){
        alert("7 eta 15 karaktere bitarteko luzera izan behar du.")
    }
}

const utsitu = function(e){
    e.target.value = "";
}

document.getElementById("usuario").addEventListener("blur", user);
document.getElementById("password").addEventListener("click", utsitu);