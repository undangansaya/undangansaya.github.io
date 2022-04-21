const buttonLanding = document.getElementById('landing-button');
const landing = document.querySelector('.landing');

buttonLanding.addEventListener('click', function () {
    landing.classList.add('hide')
    const audio = new Audio('audio/audio.mpeg');
    audio.play();
    audio.loop()
})