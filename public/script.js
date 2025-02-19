let pelinKorkeus;
let pelinLeveys;

let taustakuva;

let mailanYSijainti;
let mailanKorkeus = 20;
let mailanLeveys = 40;

function preload(){
    taustakuva = loadImage('kuvat/tausta.png');
}

function setup(){
    pelinLeveys = windowWidth;
    pelinKorkeus = windowWidth / 3;

    mailanYSijainti = pelinKorkeus - mailanKorkeus;
    createCanvas(pelinLeveys,pelinKorkeus);
}

function draw(){
    background("black");
    image(taustakuva,0,0,pelinLeveys,pelinKorkeus);    
    piirraMaila();
}

function piirraMaila(){
    rect(mouseX,mailanYSijainti,mailanLeveys,mailanKorkeus);

}