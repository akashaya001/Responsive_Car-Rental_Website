
document.addEventListener("DOMContentLoaded", function() {
    let redBtn = document.getElementById("red");
    let brownBtn = document.getElementById("brown");
    let whiteBtn = document.getElementById("white");
    let home = document.getElementById("home");

    redBtn.onclick = function(){
        home.style.backgroundImage = "url('car pic 2.jpg')";
    }
    
    brownBtn.onclick = function(){
        home.style.backgroundImage = "url('car pic 3.jpg')";
    }
    
    whiteBtn.onclick = function(){
        home.style.backgroundImage = "url('car pic 4.jpg')";
    }
});


let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');
     menu.onclick = () => {
       menu.classList.toggle('bx-x');
   navbar.classList.toggle('active');
   }

   window.onscroll = () => {
    menu.classList.remove('bx-x');
   navbar.classList.remove('active');
   }

   const sr = ScrollReveal ({

    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
   })

   sr.reveal('.text',{delay:150, origin:'top'})
   sr.reveal('.form-container form',{delay:400, origin:'left'})
   sr.reveal('.ride-container',{delay:450, origin:'left'})
   sr.reveal('.heading',{delay:150, origin:'top'})
   
