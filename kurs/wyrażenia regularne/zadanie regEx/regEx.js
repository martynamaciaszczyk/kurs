

/// Sprawdzić czy hasło ma: co najmniej jeden znak specjalny, dużą literę, syfrę i minimum 8 znaków

var elHaslo = document.getElementById("haslo");
var elSprawdzHaslo = document.getElementById("sprawdzHaslo");
var elKomunikat = document.getElementById("komunikat");
var sprawdzHaslo;
var regHaslo;

function sprawdz() {
var pass = elHaslo.value;
var regCyfra = /\d/;
cyfra = regCyfra.test(pass);    
elKomunikat.innerHTML = cyfra; 
    
    
var regLitera = /[A-Z]/;
litera = regLitera.test(pass);
elKomunikat.innerHTML = litera;
    
var regmalaLitera = /[a-z]/;
malaLitera = regmalaLitera.test(pass);
elKomunikat.innerHTML = malaLitera;

    
var regZnak = /\W|_/;
znak = regZnak.test(pass);
elKomunikat.innerHTML = znak;

var dlugosc = pass.length;    
    
if (dlugosc >= 8 && znak && litera && cyfra ){
    elKomunikat.innerHTML = "Poprawne hasło"; 
}else{
    elKomunikat.innerHTML = "Błędne hasło"; 
}
}




elSprawdzHaslo.addEventListener('click', sprawdz);