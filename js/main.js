const searchEl = document.querySelector(".search");
const searchInputEL = searchEl.querySelector("input");
const searchIcon = searchEl.querySelector(".material-icons");
searchEl.addEventListener("click", function () {
  searchInputEL.focus();
});

searchInputEL.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEL.setAttribute("placeholder", "통합검색");
});

searchInputEL.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEL.setAttribute("placeholder", "");
});

const badgeEL = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //배지 요소 숨기기!
      //gsap.to(요소, 지속시간, 욥션);
      gsap.to(badgeEL, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      //배지를 다시 보이기!
      // badgeEL.style.display='block'; 이미 자체가 div인데 당연히 block요소이지!
      gsap.to(badgeEL, 0.9, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

const fadeELs = document.querySelectorAll(".visual .fade-in");
fadeELs.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 욥션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0부터 순차적으로 delay시간이 달라진다!
    opacity: 1,
  });
});
//new Swiper(선택자 요소, 옵션을 입력한다!)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true, //자동으로 슬라이드 이동
  loop: true, //loop를 돌면서 계속 이동을 의미함!
});

new Swiper(".promotion .swiper-container", {
  direction: "horizontal", //이미 기본값이라 따로 명시할 필요는 없음!
  slidesPerView: 3, //한 번에 3개 슬라이드를 보여주겠다
  spaceBetween: 10, //슬라이드 사이의 여백을 의미함!
  centeredSlides: true, //1번 슬라이드가 가운데 보이기!
  loop: true, // 이것을 추가하지 않으면=> 반복재생X circle처럼 돌아오는 구조가 형성X
  // autoplay: { //객체로 만들어서 추가적인 옵션을 만들 수 있다!
  //   delay: 5000, //.5s를 의미함!

  // },
  pagination: {
    //밑 html요소를 실제 pagination요소로 사용하겠다는 의미이다!
    el: ".promotion .swiper-pagination",
    clickable: true, //실제로 클릭이 가능한지 설정!
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
    nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHiddePromotion = false;

//특정 요소의 보임/숨김 처리는 이렇게 클래스 삽입을 통해 css로 통제하는 것이 바림직!?
promotionToggleBtn.addEventListener("click", function () {
  //반대되는 속성을 click 이벤트와 함께 저장해 주는 것이다!
  isHiddePromotion = !isHiddePromotion;
  if (isHiddePromotion) {
    //숨김 처리!
    promotionEl.classList.add("hide");
  } else {
    //드러내기 처리!
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

//실제로 구동됐을 때 받을 선택자를 selector란 매개변수로 받게 된다!
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, //y축을 의미함!
    repeat: -1, //무한반복을 의미함!
    yoyo: true, //재생한 animation을 다시 위로 올리는 역할을 담당함!
    ease: Power1.easeInOut,
    delay: random(0, delay), //애니메이션 시작을 지연한다!
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

