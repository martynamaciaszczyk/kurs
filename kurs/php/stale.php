<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
    $zmienna = "Janusz";
    $zmienna = "Agata";

    define("PI", 3.14159);
    echo PI."<br>";
    //PI = 3.14; dla stałej nie można zmieniać wartości

    const NARODOWOSC = "polska";
    echo NARODOWOSC;
    //Utwórz zmienną imię, dodaj swoje dane, dwie stale: miasto i kraj. Dane wyświetl w formacie:
//imię:.... <br> <br> miasto:.... <br> kraj: .....

    $imie="Martyna";
    define("MIASTO",'Poznan');
    define("KRAJ",'Polska');

    echo $imie.MIASTO.KRAJ;

?>


</body>
</html>
