

function LösungenListe(){
    const LListen = document.getElementById("LListen");
    LListen.innerHTML= "<p> < h4 > <br> Einkaufswagen <br> < /h4 > <br> < ul > <br> | < li > Himbeere </li> <br> | < li > Kiwi </li> <br> < h4 > <br> Einkaufsliste <br> < h4 > <br> < ol > <br> | < li > Zitrone </li> <br> | < li > Apfel </li> <br> < /ol > <br> < h4 > <br> Definition <br> < h4 > <br> < dl > <br> |< dt > Obst < /dt > <br>| < dd > Essbare pflanzenprodukte mit Samen < /dd >"
}

const button=document.getElementById("LösungL");
button.addEventListener ("click", LösungenListe)

