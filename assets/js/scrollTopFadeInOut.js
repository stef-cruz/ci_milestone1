// Animated scroll to top button, taken from https://www.youtube.com/watch?v=Pd71ZZeIhaI

window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.nav-top');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}