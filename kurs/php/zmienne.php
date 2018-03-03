<?php
$a=1;
$_liczba = 15;
$liczba2 = 10;
$imie_="janusz";
$Imie_="Anna";
$Imie="Tomek"; //bez podlogi dziala

echo "Twoje imie<br>";
echo "Twoje imie: $imie_<br>";
echo 'Twoje imie: $imie_<br>'; //appostrofy powoduja, ze php traktuje zmienna jak tekst

#typ skalarny (prosty)
#typ Boolean

    $prawda = true;
    $falsz = false;

#typ integer

    $calkowita=50;
    $szestastkowa=0xA;
    $osemkowa=016;
    $binarna=0b1010;


#typ zmiennoprzecinkowy

   $zmienna = 10.7;

#skladnia haredoc

    /*$imie = "Filip";
    $napis = <<<TEKST
        Mam na imię $imie<br>
TEKST; */#<<<TEKST TEKST; etykieta - pozwala wyświetlić wiele linii tekstu


#nowdoc

    $nazwisko = "Kowal";
    $tekst = <<<ETYKIETA
    Moje nazwisko: $nazwisko
ETYKIETA;
echo $tekst;
?>
