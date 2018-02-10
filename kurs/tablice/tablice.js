var tablica = []; //pusta tablca
var tab = ["zielony", "czerowny", "niebieski"]; //tablica z trzema elementami
var cyfry = [1,2,3,4,5,6];
var  a = "Janusz";
var b = "Agata";
var c = "Jonasz";
var tab = [a,b,c,"tekst"];
var tab1 = [a, 'tekst', 1, "a", 10];


var owoce = ["kiwi", "pomelo", "jabłko", "banan"];
console.log(owoce); //wyświetl atablicę
/*
document.write(owoce);
*/

var dlugosc = owoce.length;
console.log(dlugosc);

//wyświetlenie elementów tablicy

var pilkarze = ["Carlos", "Lewandowski", "Messi", "Dudek"];

console.log(pilkarze[2]);
console.log(pilkarze[0]);

console.log(pilkarze[pilkarze.length-1]); //ostatni element w tablicy


for (var i=0; i < pilkarze.length; i++){
    document.write("Piłkarz " + (i+1) + " - " + pilkarze[i] + "<br>");

}

 document.write("<li id = 'kwadrat'>" + "Pierwszy piłkarz w tablicy: " + pilkarze[0] + "<br>" + "<li id = 'pilka'>" + "Ostatni piłkarz w tablicy: " + (pilkarze[pilkarze.length-1]) + "<br>" );

//Dodawanie elementów
var tabCyfry = [1,2,3,4];
tabCyfry.push(5);
console.log(tabCyfry);

//Odejmowanie elementów

tabCyfry.pop(); //usunięcie piątki
tabCyfry.pop(); //usunięcie czwórki
console.log(tabCyfry);

//sortowanie

var imiona = ["Janusz", "Agata", "Zenon", "Ula", "Andrzej"];
console.log(imiona);
var sortImiona = imiona.sort();
console.log(sortImiona);


var reverseImiona = sortImiona.reverse();
console.log(reverseImiona);

//dodanie do tablicy na końcu

reverseImiona.push("Marta");
console.log(reverseImiona);


//dodanie do tabliby na początku

reverseImiona.unshift("Monika");
console.log(reverseImiona);


//sprawdzenie czy element istnieje w tablicy

console.log(reverseImiona.indexOf("Monika"));
console.log(reverseImiona.indexOf("Marta"));
console.log(reverseImiona.indexOf("xyz"));


//sortowanie liczb


var liczba = [2, 10, 1000, 23, 9];
console.log(liczba);

var sortLiczby = liczba.sort();
console.log(sortLiczby);

var prawidloweSortLiczby = liczba.sort(function(a,b){
    return a - b;
});

console.log(prawidloweSortLiczby);


//tablice wielowymiarowe


var dane = []
dane[0] = ["Jan", "Nowak", "Poznan"];
dane[1] = ["Anna", "Nowak", "Gniezno", "Polska"];
dane[2] = ["Paweł", "Kowal", "Poznan"];


console.log(dane[1][2]); //Gniezno

/*
 for(var j = 0; j <= dane.length ; j++) {
     for(var k = 0; k <= dane[k].length; k++) {
         document.write(dane[j][k] + " ")}
     document.write("<br>");
 };
*/
console.clear();

var elKolor = document.getElementById("kolor");
elKolor.focus();
var elPrzycisk = document.getElementById("przycisk");
var elWynik = document.getElementById("wynik");
var elWyswietl = document.getElementById("wyswietl");
var tabKolory =[];
var daneU = [];

var elImie = document.getElementById("imie");
var elNazwisko = document.getElementById("nazwisko");
var elMiasto = document.getElementById("miasto");
var elDodajU = document.getElementById("dodajU");
var elWyswietlU = document.getElementById("wyswietlU");
var elDivU = document.getElementById("divU");
var elPrzyciskWybor = document.getElementById("przyciskWybor");
var elDivWybor = document.getElementById("divWybor");



function dodajKolor(){
     if(elKolor.value.length !=0){
tabKolory.push(elKolor.value);
     }
console.log(tabKolory);
elKolor.value="";
elKolor.focus();
}

elPrzycisk.addEventListener('click', dodajKolor);

function wyswietlKolory() {
    var kol= "";

    for(var i = 0; i < tabKolory.length; i++) {

        kol+="<li>" + tabKolory[i] + " ";
    }
    elWynik.innerHTML = kol;
    };

elWyswietl.addEventListener('click', wyswietlKolory);


for (var i = 0; i < tabKolory.length; i++){
document.write(tabKolory[i])
};



function wyswietlUzytkownika() {
    var nazwisko = "";
    for(var i=0; i < daneU.length; i++ ){
        nazwisko += daneU[i][1] + "<br>";
    }
    elDivU.innerHTML = nazwisko;

}
function wyswietlUzytkownika1() {
    var nazwisko = "";
    for(var i=0; i < daneU.length; i++ ){
    nazwisko += daneU[i][1] + '<input type="radio" name="wybor" value ="' +i + '">' + "<br>";
    }
    elDivU.innerHTML = '<form name="form1">' + nazwisko + '<form>';
}

function dodajUzytkownika() {
    daneU[daneU.length] = [elImie.value, elNazwisko.value, elMiasto.value];
    console.log(daneU);
    console.log(daneU.length);

}

function wyborU() {
var id, komunikat;
    id = form1.elements("wybor").value;
//    console.log(id);
    divWybor.innerHTML = daneU[id];
    var k;
k = "Imię: " + daneU[id][0] + "<br>";
k += "Nazwisko: " + daneU[id][1] + "<br>";
k += "Miasto: " + daneU[id][2] + "<br>";

}



elDodajU.addEventListener('click', dodajUzytkownika);
elWyswietlU.addEventListener('click', wyswietlUzytkownika1);
elPrzyciskWybor.addEventListener('click', wyborU);





























































