/*
true or false
*/

var tekst ="60-539";
var regula = /szkola/;
regula = /SZKOLA/; //wyszukuje słowo tylko wielkimi literami
regula = /SzKoLA/i; //znajduje słowo bez względu na wielkość liter
regula = /^szkola/i; //znajduje na początku wprowadzonego tekstu dane wyrażenie
regula = /szkola$/i; //znajduje wyraz na końcu wprowadzanego ciągu
regula = /^szkola$/i; //znajduje wyraz na końcu wprowadzanego ciągu
regula = /^szkola$/i; //Znajduje dokładnie tak wpisane słowo



regula = /[a]/; //sprawdza występowanie danej litery w tekście (małej)
regula = /[A]/;//sprawdza występowanie danej litery w tekście (dużej)
regula = /[A]/i;//sprawdza występowanie danej litery w tekście, bez wzgledu na jej wielkość
regula = /[a-z]/;
regula = /[A-Z]/; //sprawdza, czy jest jakikolwiek znak z tego przedziału (duży)
regula = /[A-z]/; //sprawdza zgodnie z tablicami ACII od dużego A do małego z 
regula = /[ąężźśćńół]|[a-z]/; 
regula = /[ąężźśćńół]|[A-Z]/; 
regula = /^[ąężźśćńół]|[A-Z]/; 
regula = /^[ąężźśćńół]/; 
regula = /[a-z]\s/; //wyszukuje w ciągu spacje 
regula = /[a-z]\S/; //wyszukuje w ciągu spacje, tabulatory



//mail
// + jeden lub więcej znaków
regula = /[a-z]+@/;
regula = /^mąk[a]?@/; //? może lub nie musi być ten znak (tylkoe jeden maksymalnie)
regula = /^mąk[znak]?@/; //? może lub nie musi być któryś z tych znaków (jeden)
regula = /[a]{1}/; //musi występować znak a co najmniej raz
regula = /[a]{2}/; //musi występować znak a co najmniej dwa razy obok siebie
regula = /[a]{2,4}/; //sprawdza czy występują co najmeniej 2,3 lub 4 znaki a
regula = /[a]{2,}/; 
regula = /^[a]{2,}/; //dwa a od początku ciągu 
regula = /^[a]{2,}$/; //od początku do końca dwa znaki a
regula = /\//; // musi występować slash
regula = /\s/; // musi występować spacja
regula = /./; // musi wystpować tylko jeden znak
regula = /../; // musi wystpować tylko dwa znaki
regula = /\./; // musi występowac kropka
regula = /\.[a-z]{2,3}$/; // musi występowac kropka
//  \s - spacja, tabulacja lub znak nowego wiersza 
//  \S - brak spacji, tabulacji i znaku nowego wiersza


// \w znak będący literą, cyfrą, znakiem
// \W znaki specjalne bez _

regula = /\w/;
regula = /\w|[_]/;

// \d znak będący cyfrą
// \D znak nie będący cyfrą


regula = /\d/;
regula = /\D/;

//grupa

regula = /(test)/; //sprawdza, czy występuje słowo test, moze być kilka razy
regula = /(test){2}/; //sprawdza, czy występuje słowo test dokładnie dwa razy


//kod pocztowy
regula = /^\d{2}-\d{3}$/; 
var sprawdz;
var muzyka = "plik@mp3 arkusz.csv szkola.mp3 tekst.mp3";
var mp3 = /\w+\.mp3/g;
sprawdz = mp3.test(muzyka);


var sprawdz1;
sprawdz1 = muzyka.match(mp3);
console.log(sprawdz);
console.log(sprawdz1);


var iloscUtworow = sprawdz1.length;
console.log("Ilość utworów: " + iloscUtworow);

document.write("<ol>"); 
for (var i = 0; i < iloscUtworow; i++){
document.write("<li>" + sprawdz1[i] + "</li>");
}
document.write("<ol>");
























var sprawdz = regula.test(tekst);
console.log(sprawdz); 