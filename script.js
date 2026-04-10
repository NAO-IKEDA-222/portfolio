AOS.init({
  duration: 1000
});
// ページネーション付きスライダー
window.onload = function () {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 50,
    slidesPerView: 2.0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
};

//マーカー（スクロールして視界にはいったときに動作が始まる）
document.addEventListener('DOMContentLoaded', function () {
    const markers = document.querySelectorAll('.marker');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            }
        });
    }, {
        threshold: 0.7
    });

    markers.forEach(marker => {
        observer.observe(marker);
    });
});


//よくあるご質問
$(function(){
    $(".js-question").click(function(){
        $(this).toggleClass("is-active");
        $(".js-question").not(this).removeClass("is-active");
    });
});