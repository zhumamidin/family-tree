const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

const btns = document.querySelectorAll(".grandchildren-btn");
const showItem = document.querySelectorAll(".grandchildren-item");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("show");
  });
});
