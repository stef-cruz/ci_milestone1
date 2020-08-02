// $(window).on("load",function() {
//     $(window).scroll(function() {
//       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//       $("#nav-top").each(function() {
//         /* Check the location of each desired element */
//         var objectBottom = $(this).offset().top + $(this).outerHeight();
        
//         /* If the element is completely within bounds of the window, fade it in */
//         if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//           if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//         } else { //object goes out of view (scrolling up)
//           if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//         }
//       });
//     }).scroll(); //invoke scroll-handler on page-load
//   });

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