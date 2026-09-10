const item = document.querySelector(".item-container");
let startX;
let positionX;


item.addEventListener('touchstart', /** @param {TouchEvent} e */(e) => {
    startX = e.touches[0].clientX;
})

item.addEventListener("touchmove", /** @param {TouchEvent} e */(e) => {
    const currentX = e.touches[0].clientX;
    positionX = currentX - startX;
})

item.addEventListener("touchend", /** @param {TouchEvent} e */ (e) => {
    if (positionX < -10) {
        item.style.transform = "translateX(-100px)";
    }

    if (positionX > 80) {
        item.style.transform = "translateX(0)";

    }

    positionX = 0;
})