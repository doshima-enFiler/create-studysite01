// ハンバーガーメニュー
const hamburger = document.getElementById('jsHamburger');
const hamburgerLine = document.querySelectorAll('.l-header__hamburger-line');
const headerNav = document.getElementById('jsNav');

hamburger.addEventListener('click', function () {
    headerNav.classList.toggle('is-open');
    for (let i = 0; i < hamburgerLine.length; i++) {
      hamburgerLine[i].classList.toggle('is-open');
    }
});

