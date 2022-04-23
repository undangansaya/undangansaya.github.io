const buttonLanding = document.getElementById('landing-button');
const landing = document.querySelector('.landing');
const body = document.querySelector('body');

buttonLanding.addEventListener('click', function () {
    landing.classList.add('hide')
    body.classList.remove('overflowY-hidden')
    const audio = new Audio('audio/audio.mpeg');
    audio.play();
    audio.loop()

})