var text = 'Kurs programowania';
console.log(text);
console.log(text.length); //18

var pierwszyZnak = text.charAt();
console.log(pierwszyZnak);

var ostatniZnak = text.charAt(text.length-1);
console.log(ostatniZnak);

var kod = text.charCodeAt(0);
console.log(kod); //wyświetla kod z tablicy ASCII czy jakoś tak (dla małego k = 107)


//zamiana na duże litery

var duza = text.toUpperCase(text);
console.log(duza);

//zamiana na małe litery

var mala = text.toLowerCase(text);
console.log(mala);

//Zamień imię wprowadzone w formularzu na:
// pierwsza litera duza, pozostałe litery małe


var elImie = document.getElementById("imie");
var elPrzycisk = document.getElementById("przycisk");
var elKomunikat = document.getElementById("komunikat");
var elKomunikat1 = document.getElementById("komunikat1");
var elNazwisko = document.getElementById("nazwisko");
var elSuwak = document.getElementById("suwak");
var elPrzycisk1 = document.getElementById("przycisk1");
var elKomunikat2 = document.getElementById("komunikat2");
var elPozycja = document.getElementById("pozycja");
var elKolor = document.getElementById("kolor");
var imie;
var nazwisko;
var minimum;
var poprawneImie;
var poprawneNazwisko;
var dlugoscNazwiska, pozycja, kolor;

function wycinanie(){
    minimum = elSuwak.value;
    elKomunikat2.innerHTML = minimum;
    nazwisko = elNazwisko.value;
    nazwisko = nazwisko.substr(minimum+1, nazwisko.length-1);
    elKomunikat2.innerHTML = nazwisko;

}

elPrzycisk1.addEventListener('click',wycinanie);

function zamienImie(){
imie = elImie.value;
    poprawneImie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
    elKomunikat.innerHTML = poprawneImie;
    nazwisko = elNazwisko.value;
    poprawneNazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();
    elKomunikat1.innerHTML = poprawneNazwisko;
    elKomunikat.style.color ="aqua";
    elKomunikat1.style.color ="brown";
}
elPrzycisk.addEventListener('click',zamienImie);

function pozycja() {
    pozycja = elSuwak.value;
    elPozycja.innerHTML = "Pozycja suwaka: " + pozycja;
    dlugoscNazwiska = elNazwisko.value.length;

    elSuwak.max = dlugoscNazwiska;
    nazwisko = nazwisko.slice(pozycja-1);

    if(pozycja ==0){
        elKomunikat2.innerHTML = "";
        elSuwak.max = dlugoscNazwiska;

    }else{
        elKomunikat2.innerHTML = nazwisko;
        elSuwak.max = dlugoscNazwiska;
    }

}
function blokuj(){
   if(elNazwisko.value.legth == 0) {
        elSuwak.disabled = true;
        elKomunikat2.innerHTML = elNazwisko.value;
   }
    else{
        elSuwak.disabled = false;
        elKomunikat2.innerHTML = elNazwisko.value;
    }

function zmienKolor() {
    kolor = elKolor.value;
    console.log(kolor);
    elKomunikat.innerHTML.style = elKolor.value;
}


}
elSuwak.addEventListener('change',pozycja);
elSuwak.disabled = true;
elSuwak.value = "0";
elPozycja.innerHTML = "Pozycja suwaka: " + elSuwak.value;
elNazwisko.addEventListener('keyup',blokuj);
elKolor.addEventListener('change',zmienKolor);

//Substring
var zdanie = "Programowanie jest super";
var wycinanie = zdanie.substr(1,2);
console.log(wycinanie);

var wycinanie1 = zdanie.substr(6,zdanie.length-1);
console.log(wycinanie1);


