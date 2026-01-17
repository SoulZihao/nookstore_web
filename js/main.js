const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open'); // 通过 CSS 控制显示/隐藏
  });
}

document.getElementById('explore-btn').addEventListener('click', () => {
  window.location.href = 'products.html';
});