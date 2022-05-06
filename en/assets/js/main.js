/*===== SHOW MENU =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* DARK MODE */
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("lightmode");
    if(document.body.classList.contains("lightmode")){
        icon.src = "ico/lightmode.png";
    } else {
        icon.src = "ico/darkmode.png";
    }
}

/*===== ACTIVE & DEACTIVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Deactive*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*Home Scroll*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*About Scroll*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*Skill Scroll*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*Project Scroll*/
sr.reveal('.project__img',{interval: 200}); 

/*Contact Scroll*/
sr.reveal('.contact__input',{interval: 200}); 




