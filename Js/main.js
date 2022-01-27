
//PROGRAMACIÓN ORIENTADA A OBJETOS

class Coche {

    constructor(marca,color,motor,cv,km){
        this.marca = marca;
        this.color = color;
        this.motor = motor;
        this.cv = cv;
        this.km = km;
        this.ruedas = 4;
        this.asientos = 4;
        this.velocidad = 0;
    }

    acelerar(parametro){
        if(parametro != ""){
            this.velocidad += parametro;
        }else {
            this.velocidad += 50;
        }
        
    }

    frenar(){
        this.velocidad = 0;
    }

    
};

//Instanciando la clase....

let coche1 = new Coche("BMW","Gris","Diesel",150,295000);
let coche2 = new Coche("Audi","Blanco","Gasolina",200,10000);
let coche3 = new Coche("Tesla","Gris","Electrico",250,1000);
let coche4 = new Coche("VolksWagen","Rojo","Diesel",100,200000);

console.log("salida",coche1,coche2);

let ganador = prompt("Quien quieres que acelere?");

switch(ganador){
    case 'Alvaro':
        coche2.acelerar(30);
    break;

    case 'Andreu':
        coche1.acelerar(30);
    break;

};


console.log(coche1,coche2);