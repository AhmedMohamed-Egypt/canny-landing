var mySwiper = new Swiper(".expertise .swiper-container", {
  spaceBetween: 0,
  slidesPerView: 1.6,
  centeredSlides: true,
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

var mySwiperBlog = new Swiper(".latestBlog .swiper-container", {
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,

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

//latestBlog
const scrollNav = () => {
  if (window.pageYOffset > 200) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
};
window.onscroll = () => {
  scrollNav();
};
//jamburg menu
//showmenu
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
  let show = false;
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
function applyFuctions(){
  localStorage.getItem("themeMode") === "drk"
  ? enableDrkMode()
  : enableLightMode();

  localStorage.getItem('autoTheme') =='true' ? document.body.classList.add('auto') : document.body.classList.remove('auto')
  
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
        applyFuctions()
       
      });
     if(localStorage.getItem('themeMode') != null){
      applyFuctions()
     }
   
    });
}
implementClick();
