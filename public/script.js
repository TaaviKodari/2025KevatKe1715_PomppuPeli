let pelinKorkeus;
let pelinLeveys;

let taustakuva;
let pelastettavakuva;

let mailanYSijainti;
let mailanKorkeus = 20;
let mailanLeveys = 40;

//väliaikainen, poista
let pelastettava;
let olio2;

function preload(){
    taustakuva = loadImage('kuvat/tausta.png');
    pelastettavakuva = loadImage('kuvat/pelastettava.png');
}

function setup(){
    pelinLeveys = windowWidth;
    pelinKorkeus = windowWidth / 3;

    mailanYSijainti = pelinKorkeus - mailanKorkeus;
    createCanvas(pelinLeveys,pelinKorkeus);

    //väliaikainen
    pelastettava = new Pelastettava();
    olio2 = new Pelastettava();
}

function draw(){
    background("black");
    image(taustakuva,0,0,pelinLeveys,pelinKorkeus);
   //image(pelastettavakuva,50,50,50,50);    
    pelastettava.liiku();
    olio2.liiku();
    piirraMaila();
}

function piirraMaila(){
    rect(mouseX,mailanYSijainti,mailanLeveys,mailanKorkeus);

}

class Pelastettava{
    constructor(){
        this.X = -10;
        this.Xnopeus = 1;
        this.Y = 40;

        this.size = pelinKorkeus / 10;
    }

    liiku(){
        this.X = this.X + this.Xnopeus;
        image(pelastettavakuva,this.X, this.Y,this.size,this.size);
    }
}