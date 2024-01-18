const burgerBtn = document.querySelector(".mobile-nav__btn");
const closeBtn = document.querySelector(".mobile-nav__close-btn");
const mobileNavLinks = document.querySelector(".mobile-nav__links");
const mobileNavLink = document.querySelectorAll(".mobile-nav__link");
const heroBg = document.querySelector(".header-hero__bg");
const yearSpan = document.querySelector(".footer__down-year-span");
const scrollbtn = document.querySelector(".scroll-up");
const scrollLink = document.querySelector(".scroll-up__link");
const closebtnIcon = document.querySelector(".mobile-nav__close-btn-img");
const burgerBtnIcon = document.querySelector(".mobile-nav__btn-img");
const headerText = document.querySelector('.header-hero__text-header')
const imgBtn = document.querySelectorAll('.achievements__btn')
const closePopupBtn = document.querySelectorAll('.achievements__popup-close')
const popupBg = document.querySelectorAll('.achievements__popup-bg')
const scrollUpBtn = document.querySelector('.scroll-up')
const expandBtn = document.querySelector('.news__expand-btn')
const slickBox = document.querySelector('.news-slick')
const expandedBox = document.querySelector('.news-expanded')
const unExpandedBtn = document.querySelector('.news__unexpand-link')
const year = new Date().getFullYear();
AOS.init();
yearSpan.textContent = year;
window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollbtn.classList.add("active-btn");
    setTimeout(() => {
      scrollbtn.classList.add("right");
    }, 1);
  } else {
    scrollbtn.classList.remove("right");
    setTimeout(() => {
      scrollbtn.classList.remove("active-btn");
    }, 100);
  }
});
const showLinks = () => {
  heroBg.classList.toggle("dark");
  mobileNavLinks.classList.toggle("opacity");
  burgerBtnIcon.classList.toggle("hide");
  closebtnIcon.classList.toggle("active-btn");
  headerText.classList.toggle('hide-opacity')
  setTimeout(() => {
    mobileNavLinks.classList.toggle("slide");
  }, 1);
  // closeBtn.classList.add('opacity')
  // setTimeout(() => mobileNavLinks.classList.remove(slide), 400);
};
const hideLinks = () => {
  heroBg.classList.remove("dark");
  burgerBtn.classList.remove("hide");
  mobileNavLinks.classList.remove("slide");
  closeBtn.classList.remove("opacity");
  burgerBtn.classList.add("active-btn");
  setTimeout(() => {
    mobileNavLinks.classList.remove("active");
    closeBtn.classList.remove("active-btn");
  }, 300);
};
mobileNavLink.forEach((e) => e.addEventListener("click", showLinks));
scrollbtn.addEventListener("click", () => {
  scrollbtn.classList.add("rotate");
  setTimeout(() => {
    scrollbtn.classList.remove("rotate");
  }, 1000);
});
imgBtn.forEach( e => {
  e.addEventListener('click', () => {
      e.previousElementSibling.classList.remove('animation-hide')
      e.previousElementSibling.classList.add('active-popup')
e.previousElementSibling.classList.add('animation-show')
scrollUpBtn.classList.remove('active-btn')

  })
})
closePopupBtn.forEach( e => {
  e.addEventListener('click', () => {
      e.parentElement.classList.add('animation-hide')
      e.parentElement.classList.remove('animation-show')
      setTimeout( () => {
  e.parentElement.classList.remove('active-popup')
  scrollUpBtn.classList.add('active-btn')
  } , 501)



  })
})
popupBg.forEach(e => {
    e.addEventListener('click', () => {
      e.parentElement.classList.add('animation-hide')
      e.parentElement.classList.remove('animation-show')
      setTimeout( () => {
  e.parentElement.classList.remove('active-popup')
  } , 501)
  })
})
const removeSlick = () => {
  slickBox.classList.add('animation-hide')
  expandBtn.classList.add('animation-hide')
setTimeout(() => {
  slickBox.classList.add('hide')
  slickBox.classList.remove('slick')
  expandedBox.classList.add('active')
  expandedBox.classList.add('animation-show')
  unExpandedBtn.classList.add('active-btn')
  unExpandedBtn.classList.add('animation-show')
  expandBtn.classList.add('hide')
}, 501);
}

burgerBtn.addEventListener("click", showLinks);
scrollLink.addEventListener("click", () => {
 setTimeout( () => window.scrollTo(0, 0), 50)
});
expandBtn.addEventListener('click', removeSlick)
unExpandedBtn.addEventListener('click', () => {
  location.reload()
  setTimeout(scrollLink)
})
