var mySwiper = new Swiper(".expertise .swiper-container", {
  spaceBetween: 0,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".expertise .swiper-button-next",
    prevEl: ".expertise .swiper-button-prev",
  },
});

var mySwiperBlog = new Swiper(".latestBlog .swiper-container", {
  spaceBetween: 0,
  slidesPerView: 3,

  loop: true,
  navigation: {
    nextEl: ".latestBlog .swiper-button-next",
    prevEl: ".latestBlog .swiper-button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
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
let show = false;
const showMenu = () => {
  const hamburgBtn = document.querySelector(".hamburgMenu");

  hamburgBtn.addEventListener("click", () => {
    if (!show) {
      document.body.classList.add("showmenu");
      show = true;
      console.log(show);
    } else {
      show = false;
      document.body.classList.remove("showmenu");
      console.log(show);
    }
  });
};
showMenu();

//get current year

document.querySelector(".currentYear").textContent = new Date().getFullYear();
/*
new Glide(".glide", {
  type: "carousel",
  autoplay: 0,
  animationDuration:250,
  animationTimingFunc: "linear",
  peek:300,
  gap: 0,
  
  

  breakpoints: {
    600: {
      peek: 300,
     
    },
    700: {
      peek: 200,
    },
    900: {
      peek: 200,
    },

    1200: {
      peek: 200,
    },
    1300: {
      peek: 300,
    },
    1400: {
      peek: 400,
    }
  },
  
  
}).mount();

*/
window.addEventListener('load', function () {
  new Glide('.glide', {
    gap:0,
    type: "carousel",
    animationDuration:600,
   peek:100,
    perView: 1,
    breakpoints: {
      300: {
        peek: 100,
       
      },
      400: {
        peek: 70,
       
      },

      500: {
        peek: 80,
       
      },
      600: {
        peek: 50,
       
      },
      700: {
        peek: 80,
      },
      900: {
        peek: 90,
      },
  
      1200: {
        peek: 110,
      },
      1300: {
        peek: 150,
      },
      1400: {
        peek: 120,
      }
    },
  }).mount();
}); 