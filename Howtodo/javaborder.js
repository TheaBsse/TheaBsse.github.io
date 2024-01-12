function Lösungenorder(){
    const LBorder = document.getElementById("LBorder");
    LBorder.innerHTML= "<p> (in Css)<br> <br>.null{<br>| border: solid 2px black;<br>}<br><br>.drei{<br>|border: dotted 15px rgb(208, 103, 145);<br>|background-color: rgb(234, 169, 6);<br>|color: darkmagenta;<br>}<br><br>.ecken{<br>  | border-radius: 8px;<br>}<br><br>.zwei{<br>   | border: double blue 8px;<br>}<br><br>.eins{<br>  | border: solid green 20px;<br>}<br> <br> (in HTML) <br> <br>< h1 ><br>CSS is good!<br>< /h1 ><br> < h1 class=null><br>CSS is great!<br>< /h1 ><br>< h1 class=eins ecken> <br>CSS is awesome!<br>< /h1 ><br> < h1 class=zwei ecken><br>CSS is outstanding!<br>< /h1 ><br>< h1 class=drei ecken><br>CSS is amazing!<br>< /h1 >"
}

const button=document.getElementById("LösungenB");
button.addEventListener ("click", Lösungenorder)