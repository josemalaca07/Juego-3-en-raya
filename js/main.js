(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  
  })()

//JUEGO
$(document).ready(function(){
    reiniciarJuego();
});

function reiniciarJuego(){
    for(var x=1;x<=9;x++){
        $("#img"+x).hide();
    } 
}

$("#resetButon").click(function(){
    reiniciarJuego();
});

$("#celda1").click(function(){
    if(document.getElementById("celda1").className != "celda marked"){
        $("#img1").show();
        $(this).addClass('marked');
        juegomaquina();
    }else{
        alert("Esta celda ya esta marcada");
    }
});

$("#celda2").click(function(){
    if(document.getElementById("celda2").className != "celda marked"){
    $("#img2").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda3").click(function(){
    if(document.getElementById("celda3").className != "celda marked"){
    $("#img3").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda4").click(function(){
    if(document.getElementById("celda4").className != "celda marked"){
    $("#img4").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda5").click(function(){
    if(document.getElementById("celda5").className != "celda marked"){
    $("#img5").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda6").click(function(){
    if(document.getElementById("celda6").className != "celda marked"){
    $("#img6").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda7").click(function(){
    if(document.getElementById("celda7").className != "celda marked"){
    $("#img7").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda8").click(function(){
    if(document.getElementById("celda8").className != "celda marked"){
    $("#img8").show();
    $(this).addClass('marked');
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

$("#celda9").click(function(){
    if(document.getElementById("celda9").className != "celda marked"){
    $(this).addClass('marked');
    $("#img9").show();
    juegomaquina();
}else{
    alert("Esta celda ya esta marcada");
}
});

function getRandomChoice() {
    return Math.floor(Math.random() * (10 - 0)) + 0;
}

function juegomaquina(){
    try{
        contador=0;
        while(contador==0){
        randomChoice = getRandomChoice();
        if(document.getElementById("celda"+randomChoice).className == "celda"){
            $("#celda"+randomChoice).addClass('marked');
            mostrarX(randomChoice);
            contador++;
        }else{
            console.log("marked");
        }
    } 
    }catch{
        alert("Ha ocurrido un error refresque la pagia");
        location.reload();
    }  
}

function mostrarX(randomChoice){
    document.getElementById("celda"+randomChoice).innerHTML="<img src='./assets/equis.png' id='img"+randomChoice+"' class='img-fluid'>";
        $("#img"+randomChoice).show()
        $("#img"+randomChoice).animate({
            height: '5em',
            width: '5em'
        });
}