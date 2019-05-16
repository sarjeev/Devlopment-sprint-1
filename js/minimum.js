/*Funstion to show menu when hamburger is active, ie toggling hamburger to active.*/
function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
};



/*Function to navigate back to top*/
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
