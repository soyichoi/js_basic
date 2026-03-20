# Swiper Javascript Plugin
* 플러그인을 통해 쉽게 만드는 슬라이드 자바스크립트 동작
## Swiper 작성 준비
0. `head` 태그 안 `title` 아래 Swiper 사용을 위한 CDN 연결
    `</title>` -> `**CDN연결파일들**` -> `reset`, `css` -> `개별js` 등 연결마무리
    <!--swiper 필수 css cdn 연결-->
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <!--swiper 필수 JS cdn 연결-->
    <script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
1. `html` 파일 내에서 슬라이드 삽입 위치에 다음과 같이 태그작성
    `div.swiper>div.swiper-wrapper>div.swiper-slide`
    `div.swiper` : swiper플러그인 시작 위치(js 연결지점)
    `div.swiper-wrapper` : 슬라이드들 부모역할(flex 내장)
    `div.swiper-slide` : 개별슬라이드들 `*숫자` 개수생성
2. 1번에서 생성한 태그에 대상구분용의 별도 클래스 따로 생성
    `div.swiper.개별클래스명`
    -> `<div class="swiper 개별클래스명">`
    `div.swiper-slide.slide번호`
    -> `<div class="swiper-slide slide1">`
3. 프로젝트 디자인에 따라 필요한 추가 태그들을 작성
    `div.swiper-slide`안에 `a, h, p, table, form, div 등..`
4. CSS 선택자 준비(개별, 공통용 모두)
    **주의사항**
    * `swiper-wrapper, swiper-slide`
        `display, width, height, position` 적용하지 않기
    * `swiper` 제일 바깥쪽 swiper시작태그한테만 크기 적용
    * `swiper-slide` 안 3번 목적으로 만든 태그들은 속성 자유
5. JS DOM 변수 준비 -> swiper 연결
    * `const 변수명 = document.querySelector(대상);`
    * `const 변수명 = new Swiper(스와이퍼적용변수명, {옵션:값, 옵션:값,});`
## Swiper {option:value,} 종류와 뜻
* `loop: 값,`
    * 슬라이드 **끝 -> 시작으로 반복**
    * `true` : 반복O / `false` : 반복X
* `direction: '값',`
    * 슬라이드 **이동 방향 설정**
    * `'horizontal'` 수평(기본값)
    * `'vertical'` 수직
    * 제자리 나타나기/사라지기 효과(fade 등) 사용할경우 direction 적용해제
* `effect: 값,`
    * 슬라이드 **전환 효과 설정**
    * `fade` : 부드럽게 사라짐/나타남
    * `cube` : 큐브 회전 효과
    * `flip` : 카드 뒤집기 효과
* `mousewheel: 값,`
    * **마우스휠로 슬라이드 제어 가능 여부**
    * `true` : 사용O / `false` : 사용X
* `autoplay: {옵션: 값, 옵션: 값}`
    * 자동 재생 설정(객체 형태로 작성)
    * `delay: 값,` //1000 == 1초
    * `pauseOnMouseEnter: 값,` //마우스가 올라가면 일시정지(`true`) / 계속 재생(`false`)
    * `disableOnInteracion: 값,` //마우스 상호작용 후에 멈춤(`true`) / 계속 재생(`false`)
* `speed: 값,`
    * 마우스휠 속도 조절
    * 400(기본) / 숫자 높아질수록 느려짐
## Swiper 선택요소(페이지번호, 이전다음버튼, 스크롤바) 주의사항
* 기본 작성 위치는 `swiper-wrapper`의 다음 형제 위치
    * `swiper`의 첫번째 자식(swiper-wrapper) 두번째자식(선택요소들)
    * **절대 `swiper-slide`와 형제,자식,자손위치에 배치하지 않기**
* 기본 순서 : `html -> js swiper options세팅 -> (선택)css`
* **아래 선택요소들 태그는 자식, 자손으로 다른 태그 삽입 금지**
    * `div.swiper-pagination`
    * `div.swiper-button-prev`
    * `div.swiper-button-next`
    * `div.swiper-scrollbar`
    * `<div class="swiper-pagination">내용금지</div>`
## Swiper 선택요소(pagination, prev, next, scrollbar) 디자인 규칙&주의사항
### 기존 Swiper-slide 겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swiper` 두번째 자식 위치로 생성
### 기존 Swiper-slide 외부 바깥쪽으로 안겹치는 디자인을 하고 싶을 때
* 태그 위치 `div.swiper` 다음 형제 위치로 생성
* `div.swiper`와 생성된 선택태그를 묶어주는 추가 태그 생성(디자인에 따라 다름)
### 교차 여부에 따라 태그 위치를 다르게 해야하는 이유
* `div.swiper`에 기본CSS로 `overflow:hidden` 있으므로 그 값을 `visible`로 바꾸면 선택요소 뿐 아닌 `swiper-slide`들도 모두 보이기 때문에 원하는 레이아웃을 만들 수 없음.
## Swiper 안에 추가 Swiper 생성 시 안쪽 Swiper 마우스드래그 안 될때 해결방법
* 안쪽 Swiper js 옵션:값으로 아래와 같이 작성
    * `nested:true,`
    * 부모 swiper와 겹쳐 있을 때 드래그 충돌방지 옵션:값