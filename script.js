const buttonLanding = document.getElementById('landing-button');
const landing = document.querySelector('.landing');
const body = document.querySelector('body');

buttonLanding.addEventListener('click', function () {
    landing.classList.add('hide')
    body.classList.remove('overflowY-hidden')
    const audio = new Audio('audio/audio.mpeg');
    audio.play();

    mainAnimation();
})




function mainAnimation() {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".main-caption", {
        duration: 2,
        delay: 1,
        text: "We are Getting Married"
    })
    gsap.from('.nama-perempuan', {
        duration: 1,
        delay: 2,
        y: -100,
        opacity: 0,
    })
    gsap.from('.dan', {
        duration: 1,
        delay: 3,
        y: -100,
        opacity: 0,
    })
    gsap.from('.nama-laki', {
        duration: 1,
        delay: 4,
        y: -100,
        opacity: 0,
    })
}