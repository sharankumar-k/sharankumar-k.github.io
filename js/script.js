// TYPING EFFECT

const words = [
    "Web Developer",
    "Java Developer",
    "Spring Boot Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeEffect(){

    if(charIndex < words[wordIndex].length){

        typingElement.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(deleteEffect,1500);
    }
}

function deleteEffect(){

    if(charIndex > 0){

        typingElement.textContent =
            words[wordIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,50);

    }else{

        wordIndex++;

        if(wordIndex === words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,500);
    }
}

if (typingElement) {
    typeEffect();
}


// MOBILE MENU

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

if(hamburger && navLinks){

    hamburger.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}