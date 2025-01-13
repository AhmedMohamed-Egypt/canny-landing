var mySwiper = new Swiper(".swiper-container", {
  spaceBetween: 0,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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