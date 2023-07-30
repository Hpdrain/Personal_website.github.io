// For Navigation bar 
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const header = document.getElementById('header')

document.onclick = function(e) {
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
        toggle.classList.remove('active');
        navbar.classList.remove('active')
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active');
    navbar.classList.toggle('active')
};



// Scroll bar to up 

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight)
    ;
    if(pos > 50) {
        scrollProgress.style.display = "grid";
    }  else {
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#e11d48 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// scroll reveal 

ScrollReveal({
    reset: true,
    distance: '20px', 
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.hero__img, .hero__subtitle, .title, .project__titles, .project__subtitles, .about-img, .footer-content', { origin: 'top' });
ScrollReveal().reveal('.contact, .slide-container, .about-content p, .row .col', { origin: 'left' });
ScrollReveal().reveal('.info, .about-content h3, .row .col:nth-child(2)', { origin: 'right' });
ScrollReveal().reveal('.hero__title, .hero__description, .hero__btn, .map, .contactUs form', { origin: 'bottom' });



// swiper 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  
// vanilla tilt 
  VanillaTilt.init(document.querySelectorAll(".data-tilt"), {

  });

// Email Receiver 

function Send() {

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "raffy.veloria.2332@gmail.com",
        Password : "540637047788038F5E6FF32244A512FE218C",
        To : 'raffy.veloria.2332@gmail.com',
        From : "raffy.veloria.2332@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Name:" + name + "<br/> User Email:" + email + "<br/> Contact Number:" 
        + contact + "<br/> Subject:" + subject + "<br/>Message:" + message
    }).then( 
        (message) => {
            if (message === "OK") {
                alert("Thank you! Your message has been sent.");
            } else {
                alert("Error: Something went wrong. Please try again later.");
            }
        }
    );
};

// progress bar 

