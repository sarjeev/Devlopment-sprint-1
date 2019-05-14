/*Funstion to show menu when hamburger is active, ie toggling hamburger to active.*/
const navSlide = () => {
  const hamburger=document.querySelector('.hamburger');
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');
  hamburger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });
}

navSlide();

/*Function to navigate back to top*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
