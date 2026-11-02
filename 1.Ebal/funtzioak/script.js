
/*txarto
function gehiketa (a, b){
    return a+b;
}
console.log(gehiketa(3, 5));*/

/*const gehiketa = function (a, b){
    return a + b;
}*/

/*
const gehiketa = (a, b) => a + b;
console.log(gehiketa(3, 5));

const gehituIVA = presio => presio * 1.21;
console.log(gehituIVA(10));

const kaixo = () => console.log("Kaixo");
kaixo();
*/

//CLOSURES
const sortuKontadorea = () => {
    let kontadorea = 0;

    /*return () => {
        kontadorea++;
        return kontadorea;
    }*/
   return () => ++kontadorea;
}
const handitu = sortuKontadorea();
console.log(handitu());
console.log(handitu());
console.log(handitu());
console.log(handitu());
console.log(handitu());

const sortuKontua = function (saldoInicial){
    let saldo = saldoInicial;

    return{
        sartuDirua(kantitatea){
            saldo += kantitatea;
            return ("Dirua sartu da. Saldo: " + saldo);
        },
        ikusiSaldo(){
            return ("Zure saldoa " + saldo + "€ da.")
        }
    }
}

const nireKontua = sortuKontua(1000);
console.log(nireKontua.ikusiSaldo());
console.log(nireKontua.sartuDirua(100));
console.log(nireKontua.ikusiSaldo());
