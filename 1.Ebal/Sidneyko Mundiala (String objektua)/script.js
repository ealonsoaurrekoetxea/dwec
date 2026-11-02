let esaldia = "La selección femenina de España se ha proclamado campeona del Mundial después de derrotar a Inglaterra en la gran final de Sidney";

//1.
console.log(esaldia.length);//Karaktere kantitatea

//2.
console.log(esaldia.charAt(25));//25 psisioan karaktera

//3.
//"d" letraren posisioa
console.log(esaldia.indexOf("d"));//Lehenegoa
console.log(esaldia.lastIndexOf("d"));//askengoa
console.log(esaldia.indexOf("d",esaldia.indexOf("d")+1));//bigarrena


//4.
console.log(esaldia.includes("Mundial"));//"Mundial" hitsaren badago = true

//5.
console.log(esaldia.includes("Portugal"));//"Potugal" hitsa ez dago = false

//6.
console.log(esaldia.startsWith("Sidney"));//Ez da asten esaldia "Sidney" hitsarekin
console.log(esaldia.endsWith("Sidney"));//Asten da

//7.
let esaldi_andiago = esaldia + " 2023ko abustuaren 20an";//gehitu testuak
console.log(esaldi_andiago);

//8.
console.log(esaldia.substring(26,35));//Zenabkien arteko testua atera

//9.
console.log(esaldia.substring(40));//Zenbatitik aurrerako testua atera

//10.
let esaldi_espasioekin = "     " + esaldia + "     ";//espasioak gehitu
console.log(esaldi_espasioekin);
console.log(esaldi_espasioekin.trim());//Hasierako eta bukaerako espasioak kendu

//11.
console.log(esaldia.toLowerCase());//Letra xehea jarri
console.log(esaldia.toUpperCase());//Letar larria jarri

//12.
let array = esaldia.split("");//esaldia array batean bantu

//13.
console.log(array[0]);//Arrayaren 0 posisioa atera
console.log(array[6]);//Arrayaren 6 posisioa atera
console.log(array[11]);//Arrayaren 11 posisioa atera