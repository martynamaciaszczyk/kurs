
var x="Janusz";
witaj(x);
document.write("<br>");

var a = 10.1;
poleKwadratu(a);


var a  = 5;
var b = 15;
console.log(poleProstokata(a,b));
var poleProstokata = poleProstokata(3,4);
var elPoleProstokata = document.getElementById("poleProstokata");
elPoleProstokata.innerHTML = "Pole prostokąta wynosi: " + poleProstokata ;


//pole i objętość
document.write("pole wynosi: " + poleObjetosc(2,3,4)[0] + "cm<sup>2</sup>" + "<br>"); //pole
document.write("objetość wynosi: " + poleObjetosc(2,3,4)[1] + "cm<sup>3</sup>"); //objętość
console.log(poleObjetosc(2,3,4));
