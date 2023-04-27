$(document).ready(function(){
var typeData = new Typed(".role", {
    strings: [
        "Web-Developer",
        "Competitive Programmer",
        "Coder",
        "Photographer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbz1gai1Ui8es6tauPp_rSDTrlO9ab-PjJjlcp63XwyZxSmj-hiQef1Kca8rRbLiAXN6/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});


    $('.menu-btn').click(function(){
        $('.navbar .nav-items').toggleClass("show");
    });
})