function LösungenTabelle(){
    const LTabelle = document.getElementById("LTabelle");
    LTabelle.innerHTML= "<p> < h4 > <br> Sortiment <br> < /h4 > <br> < table border > <br> | < tr > <br> | |< th > Rot < /th > <br>  | |< th > Grün < /th > <br>  | |< th > Gelb < /th > <br> | < /tr > <br> | < tr > <br> | |< td > Erdbeere < /td > <br>  | |< td > Birne < /td > <br>  | |< td > Banane < /td > <br> | < /tr > <br> < tr > <br> | |< td > Himbeere < /td > <br>  | |< td > Weintraube < /td > <br>  | |< td > Ananas < /td > <br> | < /tr > <br> < /table >"
}

const button=document.getElementById("LösungT");
button.addEventListener ("click", LösungenTabelle)