
// 변수생성 도큐먼트객체에서 쿼리셀렉터메서드 실행
const searchEl = document.querySelector('.search');
// 변수생성 searchEl에서 쿼리셀렉트에서 search의 input요소를 찾는다
const searchInputEl = searchEl.querySelector('input');
// search요소에 이벤트를 추가 -> 클릭 이벤트 클릭하면 함수를 실행(핸들러)
searchEl.addEventListener('click', function () {
    // Logic
    // searchInputEl을 포커스(클릭)하겠다
    searchInputEl.focus();
});
// searchInputEl부분에 만약 focus가되면 함수가 실행된다
searchInputEl.addEventListener('focus', function () {
    // searchEl에 클래스정보를 가지고있는 객체를 클래스 정보에 add(추가)하겠다
    searchEl.classList.add('focused');
    // attributes(html의 속성을) set(추가)
    searchInputEl.setAttribute('placeholder', '통합검색');
});
// 포커스가 헤제되었을 때
searchInputEl.addEventListener('blur', function () {
    // searchEl에 클래스정보를 가지고있는 객체를 클래스 정보에서 remove(제거)하겠다
    searchEl.classList.remove('focused');
    // attributes(html의 속성을) set(추가)
    searchInputEl.setAttribute('placeholder', '');
});
