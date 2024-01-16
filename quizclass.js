function BasicsA(){
    const QuizbasicsLA = document.getElementById("QuizbasicsLA");
    QuizbasicsLA.innerHTML= "Das ist falsch!"

}

const button=document.getElementById("QuizbasicsA");
button.addEventListener ("click", BasicsA)

function BasicsC(){
    const QuizbasicsLC = document.getElementById("QuizbasicsLC");
    QuizbasicsLC.innerHTML= "Das ist richtig!  <br>           <a href=quizfinish.html> ~weiter~ </a>    "
}

const QuizbasiC=document.getElementById("QuizbasiC");
QuizbasiC.addEventListener ("click", BasicsC)

function BasicsB(){
    const QuizbasicsLB = document.getElementById("QuizbasicsLB");
    QuizbasicsLB.innerHTML= "Das ist Falsch!"
}

const QuizbasicsB=document.getElementById("QuizbasicsB");
QuizbasicsB.addEventListener ("click", BasicsB)