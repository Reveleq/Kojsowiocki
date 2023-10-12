const burgerBtn = document.querySelector(".mobile-nav__btn");
const closeBtn = document.querySelector(".mobile-nav__close-btn");
const mobileNavLinks = document.querySelector(".mobile-nav__links");
const mobileNavBg = document.querySelector('.mobile-nav__bg')
const mobileNavLink = document.querySelectorAll('.mobile-nav__link')
const showLinks = () => {
	mobileNavLinks.classList.add("active");
	closeBtn.classList.add("active-btn");
	burgerBtn.classList.remove("active-btn");
	burgerBtn.classList.add("hide");
    mobileNavBg.classList.add('active-btn')
    setTimeout( () => {
        mobileNavLinks.classList.add("slide")}, 1)
    mobileNavBg.classList.add('opacity')
    closeBtn.classList.add('opacity')

	
	// setTimeout(() => mobileNavLinks.classList.remove(slide), 400);
};
const hideLinks = () => {
	burgerBtn.classList.remove("hide");
    mobileNavLinks.classList.remove("slide")
	mobileNavBg.classList.remove('opacity')
    closeBtn.classList.remove('opacity')
	burgerBtn.classList.add("active-btn");
     setTimeout( () => {
        mobileNavLinks.classList.remove("active")
        closeBtn.classList.remove("active-btn");
        mobileNavBg.classList.add('active-btn')
}, 300)
};
mobileNavLink.forEach( e => e.addEventListener('click', hideLinks)
)
burgerBtn.addEventListener("click", showLinks);
closeBtn.addEventListener("click", hideLinks);
