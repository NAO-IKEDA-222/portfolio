AOS.init({
  duration: 1000
});

//ページネーション付きスライダー
  // Swiper初期化
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.custom-pagination', // 外部のページネーション要素
      clickable: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  });

//送料無料のポップアップ
const popUp = document.getElementById('pop-up');

window.addEventListener('scroll',()=>{
if(scrollY>1000){
    popUp.style.display= 'block';
} else{
    popUp.style.display='none';
}
});

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("pop-up");
    const footer = document.getElementById("footer");

    // IntersectionObserverの設定
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // フッターが見えたらポップアップを非表示
          popup.classList.add("hidden");
        } else {
          // フッターが見えなくなったら再表示
          popup.classList.remove("hidden");
        }
      });
    }, {
      root: null,       // ビューポート基準
      threshold: 0.1    // 10%以上見えたら判定
    });

    observer.observe(footer);
  });

  //舞い散る桜
    window.addEventListener('DOMContentLoaded', () => {
  // コンテナを指定
  const section = document.querySelector('.cherry-blossom-container');

  // 花びらを生成する関数
  const createPetal = () => {
    const petalEl = document.createElement('span');
    petalEl.className = 'petal';
    const minSize = 10;
    const maxSize = 15;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    petalEl.style.width = `${size}px`;
    petalEl.style.height = `${size}px`;
    petalEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(petalEl);

    // 一定時間が経てば花びらを消す
    setTimeout(() => {
      petalEl.remove();
    }, 10000);
  }

  // 花びらを生成する間隔をミリ秒で指定
  setInterval(createPetal, 300);
});


//FAQ
$(function(){
    $(".js-question").click(function(){
        $(this).toggleClass("is-active");
        $(".js-question").not(this).removeClass("is-active");
    });
});

//back-to-top
const backToTop = document.getElementById('back-to-top');
backToTop.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:'smooth'});
});