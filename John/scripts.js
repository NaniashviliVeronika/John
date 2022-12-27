const mainNav = document.getElementById('main-navigation');

document.querySelector('.btn-burger').addEventListener('click', () => {
	mainNav.classList.toggle('list--active');
});

window.addEventListener('resize', function(){
	if(window.innerWidth < 575){
		$(document).ready(function(){
		  $('.block-wrapper').slick({
		    //setting-name: setting-value
		    prevArrow: false,
		    nextArrow: false

		  });
		});
	} 
});