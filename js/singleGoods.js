const wrapper = document.getElementById("single-goods-wrapper");
// const descr = document.getElementById("category_goods_item");
const close = document.querySelector(".single-goods-close");
const fullGoods = document.querySelector(".slider-container__item_0");

fullGoods.addEventListener("click", () => {
    wrapper.classList.add("add");
})

close.addEventListener("click", () => {
    wrapper.classList.remove("add");
})

