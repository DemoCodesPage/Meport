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


let btn_open = document.querySelector('.open-menu');
let btn_close = document.querySelector('.close-menu');
let show = document.querySelector('.nav-list');

btn_open.addEventListener('click', function(){
    btn_open.style.display = 'none';
    btn_close.style.display = 'block';
    show.style.display = 'block';
})

btn_close.addEventListener('click', function(){
    btn_open.style.display = 'block';
    btn_close.style.display = 'none';
    show.style.display = 'none';
})


