var elPrzycisk = document.getElementById('przycisk'); //przypisanie przycisku do zmiennej elPrzycisk
var elCzerwony = document.getElementById('czerwony');
var elZielony = document.getElementById('zielony');
var elOrange = document.getElementById('orange');
var elInny = document.getElementById('inny');
var elWynik = document.getElementById('kolor');
var elWybierzKolor = document.getElementById('wybierzKolor');
elWybierzKolor.style.visibility = 'hidden'; 
var innyKolor;

elPrzycisk.onclick = function () {
    //alert('test');
    if(elCzerwony.checked) {
        elWynik.innerHTML = "Twój ulubiony kolor: czerwony";
        elWybierzKolor.style.visibility = 'hidden';
    //alert('czerwony');
    }
    else if(elZielony.checked) {
        elWynik.innerHTML = "Twój ulubiony kolor: zielony";
        elWybierzKolor.style.visibility = 'hidden';
    }
     else if(elOrange.checked) {
        elWynik.innerHTML = "Twój ulubiony kolor: orange";
         elWybierzKolor.style.visibility = 'hidden';
    }
    else{
        //console.log(elWybierzKolor.value); 
        innyKolor = elWybierzKolor.value;
        elWynik.innerHTML = "Twój ulubiony kolor: " + innyKolor;
        
    }    
}
elInny.onclick = function() {
        elWynik.innerHTML = 'Wybierz kolor';
        elWybierzKolor.style.visibility = 'visible';
}
