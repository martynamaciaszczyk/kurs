var r = 5;
var pi = Math.PI;
var poleKola = pi * r * r;
document.write(poleKola);


var x = prompt('Podaj wartość');
console.log(Math.sqrt(x)); //sqrt - metoda obiektu Math, x - argument ; obliczanie pierwiastka kwadratowego

var a = 13.2;
var b = 28.5;
var c = 100;
var d = 1.123456789;
var e = 1.123456789;

var minimum = Math.min(a,b,c);
console.log("Min: " + minimum);   // wyświetlenie minimalnej wartości z podanych

var maximum = Math.max(a,b,c);
console.log("Max: " + maximum);

var zaokraglenie = Math.round(b);
console.log(zaokraglenie);

//zaokrąglenie do dwóch miejsc po przecinku

var d = d.toFixed(2);
console.log("Zmienna d: " + d);

//liczba całkowita cyfr przed i po przecinku
var e = e.toPrecision(2);
console.log("Zmienna e: " + e);

//abs, round, floor
var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>ABS<br>');
document.write('<br>' + Math.abs(x) + '<br>'); // wartość bezwzględna 56
document.write('<br>' + Math.abs(y) + '<br>'); // wartość bezwzględna 13.1
document.write('<br>' + Math.abs(z) + '<br>'); // wartość bezwzględna 14.9

document.write('<br>ROUND<br>');
document.write('<br>' + Math.round(x) + '<br>'); // zaokrąglenia w górę -56
document.write('<br>' + Math.round(y) + '<br>'); // -13
document.write('<br>' + Math.round(z) + '<br>'); // 15


document.write('<br>FLOOR<br>');
document.write('<br>' + Math.floor(x) + '<br>'); // zaokrąglenia w dół -56
document.write('<br>' + Math.floor(y) + '<br>'); // -14
document.write('<br>' + Math.floor(z) + '<br>'); // 14

//combo
document.write('<br>' + Math.abs(Math.round(x)) + '<br>'); //56

//potegowanie
var p = Math.pow(2,10);
console.log(p);

//losowanie od 0 - 10

var losuj = Math.floor(Math.random() * 11);
console.log(losuj);

//losowanie z przedziału 10 - 100
var losuj = Math.floor(Math.random() * 91 + 10); //pomnożenie przez liczbę pomniejszoną o liczbę początkową przedziału i dodanie do niej tej liczby
console.log(losuj);

//zad. domowe
//wylosuj liczby z przedziału od 15 - 25
var losuj = Math.floor(Math.random() * 10 + 15);
console.log(losuj);

//################################################################

var elPi = document.getElementById('pi');
var elNic = document.getElementById('nic');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function() {
   if(elPi.checked) {
       elWynik.innerHTML = Math.PI;
   }
    else if(elNic.checked) {
        elWynik.innerHTML = "Wybrałeś nic";

    }

    else {
        elWynik.innerHTML = "Wybierz jedno pole";
    }
}

