function GenParola(lungime, Litmici, LitMari, Num, Semne){
    const Lower = "abcdefghijklmnopqrstuvwxyz";
    const Uper = "ABCDEFGHIJKLMNOPQRDTUVWXYZ";
    const numere = "0123456789";
    const semne = "!@#$%^&*()_+=-";

    let Aduna = "";
    let parola ="";

    Aduna += Litmici ? Lower : "";
    Aduna += LitMari ? Uper : "";
    Aduna += Num ? numere : "";
    Aduna += Semne ? semne : "";

    if(lungime <= 0){
        console.log("Parola nu poate fi mai mica de 1");
    }
    if(Aduna.length === 0){
        console.log("Parola nu poate fi mai mica de 1");
    }
    
    for(let i = 0; i <= lungime; i++){
        const indexRandom = Math.floor(Math.random() * Aduna.length);
        parola += Aduna[indexRandom];
    }
    return parola;
}


const lungimeParola = 10;
const Litmici = true;
const LitMari = true;
const Num = true;
const Semne = false;

const parola = GenParola(lungimeParola, Litmici, LitMari, Num, Semne);

const buton = document.getElementById("buton");
const afis = document.getElementById("afis");

buton.onclick = function(){
    afis.textContent = parola;
}
