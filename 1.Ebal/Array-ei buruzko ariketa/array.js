class miLista{
    constructor(lista){
        this._lista = [];
    }

    insertarInicio(objeto){
        this._lista.unshift(objeto);
    }

    insertarFinal(objeto){
        this._lista.push(objeto);
    }

    eliminarInicio(){
        this._lista.shift();
    }

    eliminarFinal(){
        this._lista.pop();
    }

    mostrarLista(){
        array.forEach(element => {
            console.log(element);
        });
    }

    mostrarListaOrdenada(){
        let array2 = array.toSorted();
        array2.forEach(element => {
            console.log(element);
        });
    }

    
}