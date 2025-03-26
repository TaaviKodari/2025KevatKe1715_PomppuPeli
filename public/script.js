let pelinKorkeus;
let pelinLeveys;

let taustakuva;
let pelastettavakuva;

let mailanYSijainti;
let mailanKorkeus = 20;
let mailanLeveys = 40;

let olioLista = [];
let olioAjastin;

function preload(){
    taustakuva = loadImage('kuvat/tausta.png');
    pelastettavakuva = loadImage('kuvat/pelastettava.png');
}

function setup(){
    pelinLeveys = windowWidth;
    pelinKorkeus = windowWidth / 3;

    mailanYSijainti = pelinKorkeus - mailanKorkeus;
    createCanvas(pelinLeveys,pelinKorkeus);
    luoOlio();
}

function draw(){
    background("black");
    image(taustakuva,0,0,pelinLeveys,pelinKorkeus);
   //image(pelastettavakuva,50,50,50,50);    
    liikutaOlioita();
    piirraMaila();
}

function piirraMaila(){
    rect(mouseX,mailanYSijainti,mailanLeveys,mailanKorkeus);

}

function luoOlio(){
    let uusiOlio = new Pelastettava();
    olioLista.unshift(uusiOlio);
    olioAjastin = setTimeout(luoOlio,2000);
}

function liikutaOlioita(){
    olioLista.forEach(function(olio,index){
        olio.liiku();

        if(olio.Y > pelinKorkeus){
            olioLista.splice(index,1);
        }

    });
}

class Pelastettava{
    constructor(){
        this.X = -10;
        this.Xnopeus = random(1,5);
        this.Y = random(0,50);
        this.size = pelinKorkeus / 10;
        this.Ynopeus = -2.5;
        this.painovoima = 0.05;
    }

    liiku(){
        this.X += this.Xnopeus;

        this.Ynopeus += this.painovoima;

        if(this.Y + this.size / 2 > mailanYSijainti){
            if(this.X > mouseX && this.X < mouseX + mailanLeveys){
                this.Ynopeus = -abs(this.Ynopeus);
            }
        }

        this.Y += this.Ynopeus;
        image(pelastettavakuva,this.X, this.Y,this.size,this.size);
    }
}