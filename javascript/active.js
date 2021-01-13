// var btnContainer = document.querySelector('.nav-list');
// var btns = btnContainer.getElementsByClassName('nav-item');

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function(){
//         var current = document.getElementsByClassName("active");
        
//         if(current.length > 0){
//             current[0].className = current[0].className.replace(" active", "");
//         }
//         this.className += " active";
//     });
// }

function NavbarSticky() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
}
window.addEventListener('scroll', NavbarSticky)
