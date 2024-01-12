function Lösungenfarben(){
    const LFarben = document.getElementById("LFarben");
    LFarben.innerHTML= "<p> (in Css) <br> .green{ <br> |color: green; <br> } <br> .rosa{ <br> |color: rosa; <br> } <br> .blue{ <br> |color: blue; <br> } <br> (in HTML) <br> <br>< div class=rosa ><br>| ich bin ROSA<br>< /div ><br>< div class=blue ><br>|ich bin BLAU<br>< /div ><br>< div class=green ><br>|ich bin GRÜN<br>< /div ><br> "
}

const button=document.getElementById("LösungenF");
button.addEventListener ("click", Lösungenfarben)