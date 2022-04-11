const buttonLanding = document.getElementById('landing-button');
const landing = document.querySelector('.landing')

buttonLanding.addEventListener('click', function () {
    landing.classList.add('hidden')
})

window.addEventListener('click', function (e) {
    if (e.target != buttonLanding) {
        landing.classList.toggle('hidden')
    }
})



// GSAP