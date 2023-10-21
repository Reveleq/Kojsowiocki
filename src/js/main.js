const burgerBtn = document.querySelector(".mobile-nav__btn");
const closeBtn = document.querySelector(".mobile-nav__close-btn");
const mobileNavLinks = document.querySelector(".mobile-nav__links");
const mobileNavLink = document.querySelectorAll('.mobile-nav__link')
const heroBg = document.querySelector('.header-hero__bg')
const yearSpan = document.querySelector('.footer__down-year-span')
const scrollbtn = document.querySelector('.scroll-up')
const year = new Date().getFullYear()
yearSpan.textContent = year
window.addEventListener('scroll', () => {
    if( window.scrollY > 300){
scrollbtn.classList.add('active-btn')
setTimeout( () => {
    scrollbtn.classList.add('right')
}, 100)

    }else{
        scrollbtn.classList.remove('right')
        setTimeout(() => {
            scrollbtn.classList.remove('active-btn')

        }, 100);
       
        
    }
})
const showLinks = () => {
    heroBg.classList.add('dark')
	mobileNavLinks.classList.add("active");
	closeBtn.classList.add("active-btn");
	burgerBtn.classList.remove("active-btn");
	burgerBtn.classList.add("hide");
    setTimeout( () => {
        mobileNavLinks.classList.add("slide")}, 1)
    closeBtn.classList.add('opacity')

	
	// setTimeout(() => mobileNavLinks.classList.remove(slide), 400);
};
const hideLinks = () => {
    heroBg.classList.remove('dark')
	burgerBtn.classList.remove("hide");
    mobileNavLinks.classList.remove("slide")
    closeBtn.classList.remove('opacity')
	burgerBtn.classList.add("active-btn");
     setTimeout( () => {
        mobileNavLinks.classList.remove("active")
        closeBtn.classList.remove("active-btn");
}, 300)
};
mobileNavLink.forEach( e => e.addEventListener('click', hideLinks)
)
scrollbtn.addEventListener('click', () => {
    scrollbtn.classList.add('rotate')
    setTimeout(() => {
scrollbtn.classList.remove('rotate')
    }, 1000)
})
burgerBtn.addEventListener("click", showLinks);
closeBtn.addEventListener("click", hideLinks);
