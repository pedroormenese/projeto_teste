let inicioX = 0;
let deslocamento = 0;

item.addEventListener("touchstart", (e) => {
    inicioX = e.touches[0].clientX;
});

item.addEventListener("touchmove", (e) => {
    let atualX = e.touches[0].clientX;
    deslocamento = atualX - inicioX;

    if (deslocamento < 0) {
        item.style.transform = `translateX(${deslocamento}px)`;
    }
});

item.addEventListener("touchend", () => {
    if (deslocamento < -80) {
        item.style.transform = "translateX(-100px)";
    } else {
        item.style.transform = "translateX(0)";
    }

    deslocamento = 0;
});