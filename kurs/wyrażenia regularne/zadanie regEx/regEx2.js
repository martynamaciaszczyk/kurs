

/// Sprawdzić czy hasło ma: co najmniej jeden znak specjalny, dużą literę, syfrę i minimum 8 znaków

var elHaslo = document.getElementById("haslo");
var elKomunikat = document.getElementById("komunikat");
var sprawdzHaslo;
var regHaslo;
var elDuzeLitery = document.getElementById("duzeLitery");
var elMaleLitery = document.getElementById("maleLitery");
var elZnakSpecjalny = document.getElementById("znakSpecjalny");
var elCyfry = document.getElementById("cyfry");
var elDlugoscHasla = document.getElementById("dlugoscHasla");

function sprawdz() {
var pass = elHaslo.value;
var regCyfra = /\d/;
cyfra = regCyfra.test(pass);    

    
    
var regLitera = /[A-Z]/;
litera = regLitera.test(pass);

var regmalaLitera = /[a-z]/;
malaLitera = regmalaLitera.test(pass);


    
var regZnak = /\W|_/;
znak = regZnak.test(pass);

var dlugosc = pass.length; 

if (dlugosc >= 8 ){
    elDlugoscHasla.innerHTML="<del>Hasło ma zawierać minimum 8 znaków</del>";
    elDlugoscHasla.style.color = "grey";
    
    
}else{
     elDlugoscHasla.innerHTML="Hasło ma zawierać minimum 8 znaków";
}
    
    
if (znak){
    elZnakSpecjalny.innerHTML="<del>Hasło ma zawierać co najmniej 1 znak specjalny</del>";
    elDlugoscHasla.style.color = "grey";
}else{
    elZnakSpecjalny.innerHTML="Hasło ma zawierać co najmniej 1 znak specjalny";
}
    
    
    
if (litera){
    elDuzeLitery.innerHTML="<del>Hasło ma zawierać co najmniej 1 dużą literę</del>";
    elDlugoscHasla.style.color = "grey";
}else{
    elDuzeLitery.innerHTML="Hasło ma zawierać co najmniej 1 dużą literę";

}
    
if (malaLitera){
    elMaleLitery.innerHTML="<del>Hasło ma zawierać co najmniej 1 małą literę</del>";
    elDlugoscHasla.style.color = "grey";
}else{
    elMaleLitery.innerHTML="Hasło ma zawierać co najmniej 1 małą literę";
}

    
if (cyfra){
    elCyfry.innerHTML="<del>Hasło ma zawierać co najmniej 1 cyfrę</del>";
    elDlugoscHasla.style.color = "grey";
}else{
    elCyfry.innerHTML="Hasło ma zawierać co najmniej 1 cyfrę";
}
    
if (dlugosc >= 8 && cyfra && malaLitera && litera && znak ){
    elKomunikat.innerHTML = "Poprawne hasło"; 
   
}else{
     elKomunikat.innerHTML = "Niepoprawne hasło"; 
   
}
}


elHaslo.addEventListener('keyup',sprawdz);
//elSprawdzHaslo.addEventListener('click', sprawdz);