function LösungenUeberschriften(){
    const LUebers = document.getElementById("LUebers");
    LUebers.innerHTML= "<p><br>< h1 ><br> Das ist eine Überschrift<br> < /h1 ><br>< h3 ><br> Dies ist eine kleinere Überschrift<br> < /h3 ><br> < p > <br> Das ist ein ganz normaler Text<br> < /p ><br> <p>"
}

const button=document.getElementById("LösungenUe");
button.addEventListener ("click", LösungenUeberschriften)