// ハンバーガーメニュー
const wrapper = document.querySelector('.l-wrapper');
const hamburger = document.getElementById('jsHamburger');
const hamburgerLine = document.querySelectorAll('.l-header__hamburger-line');
const headerNav = document.getElementById('jsNav');

hamburger.addEventListener('click', function () {
  // ハンバーガーボタンを変形
  for (let i = 0; i < hamburgerLine.length; i++) {
    hamburgerLine[i].classList.toggle('is-open');
  }
  // ナビゲーションエリアを開閉
  headerNav.classList.toggle('is-open');
  // 背景を固定しスクロール
  wrapper.classList.toggle('is-menuOpen');
});
