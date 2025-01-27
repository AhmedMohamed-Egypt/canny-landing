import * as bootstrap from 'bootstrap'
const activeHomePage = document.querySelector(".home-page");
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
import AOS from 'https://cdn.jsdelivr.net/npm/aos@2.3.4/+esm'


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
if(activeHomePage){
  AOS.init({
    once: true,
  });
}



const aboutSection = document.querySelector(".about-section");
const productSection = document.querySelector(".product-section");
const expertiseSection = document.querySelector(".expertise");
const idustrySection = document.querySelector(".industries ");
const chooseUs = document.querySelector(".choose");
const latesBlog = document.querySelector(".latestBlog");
const vh = document.querySelector(".hero");
const allLinks = document.querySelectorAll(".hero__nav__list > li > a");


var show = false;
export function triggerSections() {
  allLinks.forEach((item, index) => {
    const calcVh = vh.clientHeight;
    item.addEventListener("click", (e) => {
      e.preventDefault();

      document.body.classList.remove("showmenu");
      show = false;
      showMenu();

      for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].classList.remove("active");
      }
      item.classList.add("active");

      if (index === 0) {
        window.scrollTo(0, 0);
      }
      if (index === 1) {
        window.scrollTo(0, aboutSection.offsetTop + calcVh - 100);
      }
      if (index === 2) {
        window.scrollTo(0, productSection.offsetTop + calcVh - 100);
      }
      if (index === 3) {
        window.scrollTo(0, expertiseSection.offsetTop - 100);
      }
      if (index === 4) {
        window.scrollTo(0, idustrySection.offsetTop - 100);
      }
      if (index === 5) {
        window.scrollTo(0, chooseUs.offsetTop - 150);
      }
    });
  });
}
if (window.matchMedia("(max-width: 992px)").matches && activeHomePage) {
  triggerSections();
}

//triggerSections();

//latestBlog
export function scrollNav() {
  if (window.scrollY > 200) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
}
function removeActive() {
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].classList.remove("active");
  }
}

export function scrollingSections() {
  removeActive();
  const calcVh = vh.clientHeight;

  if (
    window.scrollY >= aboutSection.offsetTop + calcVh &&
    window.scrollY < productSection.offsetTop + calcVh - 150
  ) {
    document
      .querySelector(`.${aboutSection.getAttribute("data-target")}`)
      .classList.add("active");
  } else if (
    window.scrollY > productSection.offsetTop + calcVh - 200 &&
    window.scrollY < expertiseSection.offsetTop - 150
  ) {
    document
      .querySelector(`.${productSection.getAttribute("data-target")}`)
      .classList.add("active");
  } else if (
    window.scrollY >= expertiseSection.offsetTop - 150 &&
    window.scrollY < idustrySection.offsetTop - 150
  ) {
    document
      .querySelector(`.${expertiseSection.getAttribute("data-target")}`)
      .classList.add("active");
  } else if (
    window.scrollY > idustrySection.offsetTop - 150 &&
    window.scrollY < chooseUs.offsetTop - 150
  ) {
    document
      .querySelector(`.${idustrySection.getAttribute("data-target")}`)
      .classList.add("active");
  } else if (
    window.scrollY > chooseUs.offsetTop - 150 &&
    window.scrollY < latesBlog.offsetTop - 150
  ) {
    document
      .querySelector(`.${chooseUs.getAttribute("data-target")}`)
      .classList.add("active");
  } else {
    document.querySelector(".Home-Link").classList.add("active");
  }
}

/*
window.onscroll = () => {
  //scrollNav();

  if (window.matchMedia("(min-width: 994px)").matches && activeHomePage) {
    scrollingSections();
  }
};
*/

function toggleBtns(element, btn, value, classProp) {
  btn.addEventListener("click", (e) => {
    e.stopPropagation()
    if (!value) {
      element.classList.add(classProp);
      value = true;
    } else {
      value = false;
      element.classList.remove(classProp);
    }
  });
}

export function showMenu() {
  const hamburgBtn = document.querySelector(".hamburgMenu");

  toggleBtns(document.querySelector("body"), hamburgBtn, show, "showmenu");
}

//get current year

document.querySelector(".currentYear").textContent = new Date().getFullYear();
//switch mode toggle menu

export function toggleMenuLight() {
  const toggleBtn = document.querySelector(".switch-mode.btn");
  let showMenu = false;
  toggleBtns(
    document.querySelector("body"),
    toggleBtn,
    showMenu,
    "showmenuLight"
  );
}

//Implement dark auto light mode

const drkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
//const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

function enableLightMode() {
  document.body.classList.add("lightMode");
  document.body.classList.remove("drkMode");
}
function enableDrkMode() {
  document.body.classList.remove("lightMode");
  document.body.classList.add("drkMode");
}

const applyAutoMode = () => {
  drkMode
    ? localStorage.setItem("themeMode", "drk")
    : localStorage.setItem("themeMode", "light");
};
function applyFuctions() {
  localStorage.getItem("themeMode") === "drk"
    ? enableDrkMode()
    : enableLightMode();

  localStorage.getItem("autoTheme") == "true"
    ? document.body.classList.add("auto")
    : document.body.classList.remove("auto");
}

export function implementClick() {
  document
    .querySelectorAll(".switch-mode__list button")
    .forEach((item, index) => {
      item.addEventListener("click", () => {
        if (index === 0) {
          //auto mode
          applyAutoMode();
          localStorage.setItem("autoTheme", true);
        }
        if (index === 1) {
          //light mode
          localStorage.setItem("themeMode", "light");
          localStorage.setItem("autoTheme", false);
        }
        if (index === 2) {
          //drkMode
          localStorage.setItem("themeMode", "drk");
          localStorage.setItem("autoTheme", false);
        }
        applyFuctions();
      });
      if (localStorage.getItem("themeMode") != null) {
        applyFuctions();
      }
    });
}

//scroll to sections

//plugins
export function expertiseSwiper() {
  if (document.querySelector(".expertise .swiper-container")) {
    new Swiper(".expertise .swiper-container", {
    //  modules: [Navigation],
      spaceBetween: 0,
      slidesPerView: 1.6,
      centeredSlides: true,
      // slidesPerGroup :3,
      roundLengths: true,
      loop: true,

      navigation: {
        nextEl: ".expertise .swiper-button-next",
        prevEl: ".expertise .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.4,
        },
      },
    });
  }
}

export function latestBlog() {
  if (document.querySelector(".latestBlog .swiper-container")) {
    new Swiper(".latestBlog .swiper-container", {
   //   modules: [Navigation],
      spaceBetween: 20,
      slidesPerView: 1.6,
      centeredSlides: true,
      loop: true,
      roundLengths: true,
      loop: true,
      //  loopAdditionalSlides: 30,

      navigation: {
        nextEl: ".latestBlog .swiper-button-next",
        prevEl: ".latestBlog .swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.5,
        },
        991: {
          // slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        2700: {
          slidesPerView: 3,
        },
      },
    });
  }
}

export function ourLocation() {
  if (document.querySelector(".ourlocations  .swiper-container")) {
    new Swiper(".ourlocations  .swiper-container", {
     // modules: [Pagination],
      spaceBetween: 0,
      slidesPerView: 1,

      loop: true,

      navigation: {
        nextEl: ".ourlocations .swiper-button-next",
        prevEl: ".ourlocations .swiper-button-prev",
      },
      pagination: {
        el: ".ourlocations .swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },
    });
  }
}
export function hideHamburgMenuOutSide(){
  const wholeHeroNav = document.querySelector('.hero__nav')
  document.body.addEventListener('click',()=>{
   
    document.body.classList.remove('showmenu')
    show = false
    showMenu();
  })
  wholeHeroNav.addEventListener('click',(e)=>{
    e.stopPropagation()
  })


}
export function scrollPage(){
  const topBtn = document.querySelector('.back-to-top')
  if(window.scrollY > 250){
    topBtn.classList.add('show')
  }else {
    topBtn.classList.remove('show')
  }
  topBtn.addEventListener('click',()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
}




//run functions

latestBlog();
ourLocation();
expertiseSwiper();
implementClick();
toggleMenuLight();
showMenu();
hideHamburgMenuOutSide()

//event scroll


window.addEventListener("scroll", () => {
  scrollNav();
  scrollPage()
  if (window.matchMedia("(min-width: 994px)").matches && activeHomePage) {
    scrollingSections();
  }

});

const images = document.querySelectorAll("img")
const videos = document.querySelectorAll('video source')


const observer = new IntersectionObserver(function(entires, observer) {


    entires.forEach(entry => {

        if (entry.isIntersecting) {
          const img = entry.target;

            img.setAttribute("src", img.getAttribute("data-src"))
           // img.classList.add("adjustHeight")
            observer.unobserve(entry.target)
        }
    })


}, {})

images.forEach(imgBlog => {

    observer.observe(imgBlog)
})

//operate service worker

if(navigator.serviceWorker){
   navigator.serviceWorker.register('../sw.js').then((reg)=>{
   
   }).catch((err)=>{
    console.log('error',err)
   })
}