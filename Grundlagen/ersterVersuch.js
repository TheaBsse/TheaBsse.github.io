

function ändern(){
    const blub = document.getElementById("blub");
    blub.innerHTML = "yayayayyy";
}

const button = document.getElementById("abgeben");
button.addEventListener("click", ändern);