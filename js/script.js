

// ハンバーガーメニュー
// const btnOpen = document.querySelector('#navMenu');
// const btn = document.querySelectorAll("#navBtn , #navMenu a");
// btn.forEach((elm) => {
//     elm.addEventListener('click', function () {
//         btnOpen.classList.toggle('show');
//     });
// });

// ハンバーガーメニュー
const btnOpen = document.querySelector('#navMenu');
const btn = document.querySelectorAll("#navBtn , #navMenu a");

btn.forEach((elm) => {
  elm.addEventListener('click', function () {

    // 980px以上なら無効
    if (window.innerWidth >= 980) return;

    // 980px未満（スマホ・タブレット）だけ動作
    btnOpen.classList.toggle('show');
  });
});



// タイトルアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".fadein-scroll");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // 一度きり
      }
    });
  }, {
    threshold: 0.2
  });

  targets.forEach(target => observer.observe(target));
});
