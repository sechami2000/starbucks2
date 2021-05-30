
// 헤더 서브메뉴 검색창 제어
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//search 영역을 클릭하면 input 요소를 focus해라
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});
//input 요소가 focus되면, search에 focused 클래스를 추가하고
//input에 placeholder 속성 추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
//input 요소가 focus가 해제되면, search에 있던 focused 클래스를 삭제하고
//input에 placeholder 속성에 속성값으로 빈 텍스트
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//페이지 스크롤에 따른 요소 제어
//필요한 library : gsap, gsap(scrollToPlugin), lodash
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if(window.scrollY > 500) {
    // badge는 없어지고
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //totop은 원래자리로 돌아오고(x축으로 움직임)
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }
  else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// toTopEl을 클릭하면, 스크롤이 위로 .7초동안 올라감 (window 객체에 애니메이션 적용)
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// 순서대로 화면에 나타내는 기능(.fade-in 요소 찾기)
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,
    opacity: 1
  });
});

// 슬라이드 요소
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})
new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

//promotion 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    promotionEl.classList.add('hide');
  }else {
    promotionEl.classList.remove('hide');
  }
})


//올해가 몇 년도인지 계산해서 자동으로 업데이트해서 표시
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();