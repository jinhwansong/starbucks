const boxEl = document.querySelector('.search');
const boxinputEl = boxEl.querySelector('.search input');

boxEl.addEventListener('click', function () {
    boxinputEl.focus();
});


boxinputEl.addEventListener('focus', function(){
    boxEl.classList.add('focused');
    boxinputEl.setAttribute('placeholder', '통합검색');
 });
boxinputEl.addEventListener('blur', function(){
    boxEl.classList.remove('focused');
    boxinputEl.setAttribute('placeholder', '');
 });

 const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();// 연도가 자동으로 늘어남

