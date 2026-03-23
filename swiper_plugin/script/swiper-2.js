//swiper-2.js
const heroBnr = document.querySelector('.hero_bnr');
const bar_bg = document.querySelector('.bar_bg');
const bestItem = document.querySelector('.best_swiper');
const newItem = document.querySelector('.new_swiper');

console.log(heroBnr, bar_bg, bestItem, newItem);

const newSwiper = new Swiper(newItem,{
    slidesPerView:3.5,
    spaceBetween:30,
    loop:true,
    speed:3000,
    autoplay:{delay:3000,},
    centeredSlides:true,
});

const bestSwiper = new Swiper(bestItem,{
    // 한 화면 기준 보이는 슬라이드 개수(총 슬라이드 개수보단 작아야 함)
    slidesPerView:3.5,
    // 슬라이드 사이 여백(px 기준)
    spaceBetween:20,
    // 슬라이드 한 번에 전환되는 개수(기본 1개)
    //slidesPerGroup:2,
    loop:true,
    speed:3000,
    autoplay:{delay:2000,},
    centeredSlides:true,
});

const heroSwiper = new Swiper(heroBnr,{
    autoplay:{delay:3000,},
    loop:true,
    //슬라이드 변경 실행 함수
    on:{
        //처음 시작할때 실행 함수
        init:function(){
            //부모요소에 active클래스 적용하는 법
            bar_bg.classList.add('active');
        },
        slideChangeTransitionStart:function(){//슬라이드전환시시작함수
            bar_bg.classList.remove('active');
        },
        slideChangeTransitionEnd:function(){//슬라이드전환종료후시작함수
            bar_bg.classList.add('active');
        }
    },
    //페이지번호 사용자 함수
    pagination:{
        el:'.hero_bnr .pg',
        type: 'fraction',
        // swiper-pagination-current
        // swiper-pagination-total
        // 위 고유 클래스명 활용 custom javascript - renderFraction
        // swiper고유옵션:function(매개변수){return}
        renderFraction:function(current, total){
            console.log(current, total)
            let customPg = `<span class=${current}></span>`;
            //customPg += `<span>❤️</span>`;
            customPg += `<span class=${total}></span>`;
            return customPg;
        }
    }
});