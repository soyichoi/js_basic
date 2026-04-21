//위로 script
const fixedTop = document.querySelector('#fixed_group .top');
const header = document.querySelector('header');
console.log(fixedTop, header, header.children[0], header.children[1]);

//1. 초기 숨기기
fixedTop.style.display = 'none';

//2. 스크롤(event)
//객체.addEventListner(이벤트, 함수);
//스크롤 이벤트 1개에 원하는 여러개 동작삽입하기
window.addEventListener('scroll',function(){
    //console.log('스크롤 중..');
    //scrollY속성 : 얼만큼 스크롤을 움직이고 있는지 px로 보여주는 속성
    //console.log(window.scrollY);
    //100 위치만큼 내리면 'TOP'버튼 나타나기
    if(window.scrollY >= 100) fixedTop.style.display = 'block';
    //4. 위로 이동하고 나면 다시 숨겨지기
    else fixedTop.style.display = 'none';
    //================================================header
    //1. 특정 위치까지 스크롤을 내리면 header 고정시키고 디자인 변경하기
    //2. 스크롤을 올리면 header 디자인 복구, 고정해제
    if(window.scrollY >= 200){
        //console.log('200보다 큰 위치');
        // header.style.position = 'fixed'; //고정(body 기준으로 기존 디자인 해제)
        //header.style.position = 'sticky'; //고정(태그구조상 부모 기준으로 고정)
        //header.style.top = '0';//어디서부터 고정할건지 좌표적기
        header.classList.add('scroll');
        //200이상 스크롤시 scroll 클래스를 적용한다(css에서 fixed작업)
        //-> 적용 효과가 많을 경우 간단한 방법!
    }else{
        header.classList.remove('scroll');
        //header.style.position = 'relative';//고정해제
    }
});

//3. 위로 클릭 시 위로 이동하기
fixedTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo(0,0);
});