const navSlide = () => {
	const burger = document.querySelector('.burger-icon');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', ()=>{
		nav.classList.toggle('nav-active'); //when the burger icon is clicked it will turn it into the nav-active class
	
			//animateLinks
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.4}s`;
			}
			//by diving by 7, we give a nice even animation for each ul item
		});

		burger.classList.toggle('toggle');


	});//end burger eventlistener animation
}//end navSlide function

navSlide();
const topNav = document.querySelector('.top-nav');
window.addEventListener('scroll', ()=> {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		topNav.classList.toggle('top-nav-modified');
  } else {
    	topNav.classList.toggle('top-nav');
  }
});


