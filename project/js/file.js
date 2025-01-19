const aboutSection = document.querySelector(".about-section");
const productSection = document.querySelector(".product-section");
const expertiseSection = document.querySelector(".expertise");
const idustrySection = document.querySelector(".industries ");
const chooseUs = document.querySelector(".choose");
const latesBlog = document.querySelector(".latestBlog");
const vh = document.querySelector(".hero").clientHeight;
const allLinks = document.querySelectorAll(".hero__nav__list > li > a");
let activeScrolling = false;
const triggerSections = () => {
  allLinks.forEach((item, index) => {
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
        window.scrollTo(0, aboutSection.offsetTop + vh - 100);
      }
      if (index === 2) {
        window.scrollTo(0, productSection.offsetTop + vh - 100);
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
};
if (window.matchMedia("(max-width: 769px)").matches) {
  triggerSections();
}
//triggerSections();

//latestBlog
const scrollNav = () => {
  if (window.pageYOffset > 200) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
};
function removeActive() {
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].classList.remove("active");
  }
}

function scrollingSections(){
  removeActive()
  if(window.scrollY >= ((aboutSection.offsetTop + vh ) ) && window.scrollY < ((productSection.offsetTop + vh - 150) )){
    
    document.querySelector(`.${aboutSection.getAttribute('data-target')}`).classList.add('active')
    
  }else if (window.scrollY > ((productSection.offsetTop + vh - 200)  ) && window.scrollY < ( expertiseSection.offsetTop - 150 )){
  
    document.querySelector(`.${productSection.getAttribute('data-target')}`).classList.add('active')

  }else if(window.scrollY >= ( expertiseSection.offsetTop - 150) && window.scrollY < (idustrySection.offsetTop - 150 )){
    
   
    document.querySelector(`.${expertiseSection.getAttribute('data-target')}`).classList.add('active')
  }else if(window.scrollY > idustrySection.offsetTop - 150 && window.scrollY < (chooseUs.offsetTop - 150 )){
   
    document.querySelector(`.${idustrySection.getAttribute('data-target')}`).classList.add('active')
  }else if (window.scrollY > (chooseUs.offsetTop - 150) && window.scrollY < (latesBlog.offsetTop - 150 )){
   
    document.querySelector(`.${chooseUs.getAttribute('data-target')}`).classList.add('active')
  }else {
   
    document.querySelector('.Home-Link').classList.add('active')
  }
  
}

window.onscroll = () => {
  scrollNav();
 

  if (window.matchMedia("(min-width: 770px)").matches) {
    scrollingSections()
  } 
  
};
//jamburg menu
//showmenu
var show = false;
function toggleBtns(element, btn, value, classProp) {
  btn.addEventListener("click", () => {
    if (!value) {
      element.classList.add(classProp);
      value = true;
    } else {
      value = false;
      element.classList.remove(classProp);
    }
  });
}

const showMenu = () => {
  const hamburgBtn = document.querySelector(".hamburgMenu");

  toggleBtns(document.querySelector("body"), hamburgBtn, show, "showmenu");
};
showMenu();

//get current year

document.querySelector(".currentYear").textContent = new Date().getFullYear();
//switch mode toggle menu

const toggleMenuLight = () => {
  const toggleBtn = document.querySelector(".switch-mode.btn");
  let showMenu = false;
  toggleBtns(
    document.querySelector("body"),
    toggleBtn,
    showMenu,
    "showmenuLight"
  );
};
toggleMenuLight();

//Implement dark auto light mode

const drkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

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
function implementClick() {
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
implementClick();

//scroll to sections

//plugins

AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animated",
  once: true,
});

var mySwiper = new Swiper(".expertise .swiper-container", {
  spaceBetween: 0,
  slidesPerView: 1.6,
  centeredSlides: true,

  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 100,
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

var mySwiperBlog = new Swiper(".latestBlog .swiper-container", {
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,

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

var mySwiperLocations = new Swiper(".ourlocations  .swiper-container", {
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
