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
//jamburg menu 
let show = false
const showMenu =()=>{
  const hamburgBtn = document.querySelector('.hamburgMenu')
  


  hamburgBtn.addEventListener('click',()=>{
    if(!show){
      document.body.classList.add('showmenu')
      show = true
      console.log(show)
    }else {
      show = false
      document.body.classList.remove('showmenu')
      console.log(show)
    }
    
  })
}
showMenu()




//get current year

document.querySelector('.currentYear').textContent = new Date().getFullYear()