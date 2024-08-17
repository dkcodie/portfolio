// show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// validate if menu clicked
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// validate if close clicked
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Menu Mobile Remove
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Add Blur Header

const blurHeader = () => {
    const header = document.getElementById('header')
    // scroll is grater than 50 height

    this.scrollY >=50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')      
}
window.addEventListener('scroll', blurHeader)

//Text Flow

const flowtext = document.querySelector(".text")

const textLoad = () => {
    setTimeout(() => {
        flowtext.textContent= "Software Developer";
    }, 0)

    setTimeout(() => {
        flowtext.textContent = "Java Full Stack Developer";
    }, 4000)

    setTimeout(() => {
        flowtext.textContent= "Web Developer";
    }, 8000)
}
textLoad();

setInterval(textLoad, 12000);

// Email js

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault()

    // serviceid - templateid -#form-public key
    emailjs.sendForm('service_mailtrap','template_noomhuc','#contact-form','CfoOPWJD22iyWKFnY')
           .then(() =>{
            // show sent message
            contactMessage.textContent='Message Sent Successfully ✅'

            // Remove Message after 5 seconds
            setTimeout(() =>{
                contactMessage.textContent=''
            }, 3000)

            //Clear Input Fields
            contactForm.reset() 


           }, ()=>{
            // show error message
            contactMessage.textContent='Message not sent(Service Error) ❌'
           })
}

contactForm.addEventListener('submit', sendEmail)

//Show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    //When the scroll is higher than 350 viewpoint show the scroll up
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Scroll Sections Active Link 

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')

              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
} 
window.addEventListener('scroll', scrollActive)

// Initialize AOS
AOS.init({
    duration: 1000, // Duration of animations in milliseconds
    easing: 'ease-in-out', // Easing function
    once: true // Whether animation should happen only once or every time you scroll up/down
});
