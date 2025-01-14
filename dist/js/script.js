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
});



//latestBlog
const scrollNav = ()=>{
  if(window.pageYOffset > 200){
    document.body.classList.add('fixed')
  }else {
    document.body.classList.remove('fixed')
  }
}
window.onscroll = ()=>{
  scrollNav()
}



//get current year

document.querySelector('.currentYear').textContent = new Date().getFullYear()