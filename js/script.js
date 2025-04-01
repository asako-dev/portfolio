
// 線が伸びる設定
function ScrollTimelineAnime() {
  const timelineItems = document.querySelectorAll('.timeline li'); 

  timelineItems.forEach(function(item) {
      const elemPos = item.getBoundingClientRect().top + window.pageYOffset; 
      const scroll = window.pageYOffset; 
      const windowHeight = window.innerHeight; 
      const startPoint = 500; 

      if (scroll >= elemPos - windowHeight - startPoint) {
          const H = item.offsetHeight; 
          const percent = Math.min((scroll + startPoint - elemPos) / (H / 2) * 100, 100); 
          const borderLine = item.querySelector('.border-line');
          if (borderLine) {
              borderLine.style.height = percent + "%"; 
          }
      }
  });
}

// 画面をスクロールしたら動かす
window.addEventListener('scroll', function () {
  ScrollTimelineAnime(); 
});

// ハンバーガーメニュー
const btnOpen = document.querySelector('#navMenu');
const btn = document.querySelectorAll("#navBtn , #navMenu a");
btn.forEach((elm) => {
    elm.addEventListener('click', function () {
        btnOpen.classList.toggle('show');
    });
});
