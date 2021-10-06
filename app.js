const boom = document.querySelector("#boom");
const clap = document.querySelector("#clap");
const hihat = document.querySelector("#hihat");
const kick = document.querySelector("#kick");
const openhat = document.querySelector("#openhat");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const tink = document.querySelector("#tink");
const tom = document.querySelector("#tom");


const boomButton = document.querySelector("#boomButton");
const clapButton = document.querySelector("#clapButton");
const hihatButton = document.querySelector("#hihatButton");
const kickButton = document.querySelector("#kickButton");
const openhatButton = document.querySelector("#openhatButton");
const rideButton = document.querySelector("#rideButton");
const snareButton = document.querySelector("#snareButton");
const tinkButton = document.querySelector("#tinkButton");
const tomButton = document.querySelector("#tomButton");


let boomPlay = function (e) {
    boom.currentTime = 0; 
    boom.play();
}
boomButton.addEventListener('click', boomPlay, false);
boomButton.addEventListener('mouseover', boomPlay, false);


let clapPlay = function (e) {
    clap.currentTime = 0; 
    clap.play();
}
clapButton.addEventListener('click', clapPlay, false);
clapButton.addEventListener('mouseover', clapPlay, false);


let hihatPlay = function (e) {
    hihat.currentTime = 0; 
    hihat.play();
}
hihatButton.addEventListener('click', hihatPlay, false);
hihatButton.addEventListener('mouseover', hihatPlay, false);


let kickPlay = function (e) {
    kick.currentTime = 0; 
    kick.play();
}
kickButton.addEventListener('click', kickPlay, false);
kickButton.addEventListener('mouseover', kickPlay, false);


let openhatPlay = function (e) {
    openhat.currentTime = 0;
    openhat.play();
}
openhatButton.addEventListener('click', openhatPlay, false);
openhatButton.addEventListener('mouseover', openhatPlay, false);


let ridePlay = function (e) {
    ride.currentTime = 0;
    ride.play();
}
rideButton.addEventListener('click', ridePlay, false);
rideButton.addEventListener('mouseover', ridePlay, false);

snare
let snarePlay = function (e) {
    snare.currentTime = 0;
    snare.play();
}
snareButton.addEventListener('click', snarePlay, false);
snareButton.addEventListener('mouseover', snarePlay, false);


let tinkPlay = function (e) {
    tink.currentTime = 0;
    tink.play();
}
tinkButton.addEventListener('click', tinkPlay, false);
tinkButton.addEventListener('mouseover', tinkPlay, false);

let tomPlay = function (e) {
    tom.currentTime = 0;
    tom.play();
}
tomButton.addEventListener('click', tomPlay, false);
tomButton.addEventListener('mouseover', tomPlay, false);



document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyA') {
        boomPlay();
    }
    if (event.code === 'KeyS') {
        clapPlay();
    }
    if (event.code === 'KeyD') {
        hihatPlay();
    }
    if (event.code === 'KeyF') {
        kickPlay();
    }
    if (event.code === 'KeyG') {
        openhatPlay();
    }
    
    if (event.code === 'KeyH') {
        ridePlay();
    }

    if (event.code === 'KeyJ') {
        snarePlay();
    }

    if (event.code === 'KeyK') {
        tinkPlay();
    }

    if (event.code === 'KeyL') {
        tomPlay();
    }
}, false);

