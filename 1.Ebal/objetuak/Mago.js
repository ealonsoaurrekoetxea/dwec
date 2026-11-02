class Mago extends Heroe {
    constructor(nombre, nivel, poder){
        super(nombre, nivel);
        this._poder = poder;
    }

    get poder() {return this._poder;}
    set poder(poder) {this._poder = poder;}

    saludo () {
        return "Soy " + this._nombre + " tengo el poder " + this._poder;
    }
}