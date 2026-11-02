class Erabiltzaile{
    constructor(izena, abizena, NAN, jaiotze_urtea, probintzia){
        this._izena = izena;
        this._abizena = abizena;
        this._NAN = NAN;
        this._jaiotze_urtea = jaiotze_urtea;
        this._probintzia = probintzia;
    }
    
    get izena() {return this._izena};
    get abizena() {return this._abizena};
    get NAN() {return this._NAN};
    get jaiotze_urtea() {return this._jaiotze_urtea};
    get probintzia() {return this._probintzia};

    set izena(izena) {this._izena = izena};
    set abizena(abizena) {this._abizena = abizena};
    set NAN(NAN) {this._NAN = NAN};
    set jaiotze_urtea(jaiotze_urtea) {this._jaiotze_urtea = jaiotze_urtea};
    set probintzia(probintzia) {this._probintzia = probintzia};

    sortuLogin(){
        return this._izena.slice(0,1) + this._abizena.slice + this._jaiotze_urtea.slice(-2);
    }

    getAdina(){
        let data = new Date();
        let urte = data.getFullYear();
        return urte - this._jaiotze_urtea;
    }

    toString(){
        return "Izena: " + this._izena + " Abizena: " + this._abizena + " NAN: " + this._NAN + " Jaiotze urtea: " + this._jaiotze_urtea + " Probintzia: " + this._probintzia;
    }

    toHTML(){
        return "<p>Izena: " + this._izena + "<br> Abizena: " + this._abizena + "<br> NAN: " + this._NAN + "<br> Jaiotze urtea: " + this._jaiotze_urtea + "<br> Probintzia: " + this._probintzia + "</p>";
    }

}