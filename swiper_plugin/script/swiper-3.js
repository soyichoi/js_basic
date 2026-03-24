//swiper-3.js
const ssfHero = document.querySelector('.ssf_hero');
const brandSlide = document.querySelector('.brand_slide');

console.log(ssfHero,brandSlide);

const brandSwiper = new Swiper(brandSlide,{
    slidesPerView:3,
    spaceBetween:10,
    loop:true,
    autoplay:{delay:3000,},
    speed:1000,
    navigation:{
        prevEl:'.brand_slide ~ .prev', //~ 형제들 중에 있다는 뜻!
        nextEl:'.brand_slide ~ .next',
    },
})

const ssfSwiper = new Swiper(ssfHero, {
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0, //여백 기본값 0
    loop:true,
    autoplay:{delay:2000,},
    speed:1000,
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    },
});