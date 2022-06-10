const loader = document.querySelector('.loader');

const fadeEffect = setInterval(() => {
// if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
if (!loader.style.opacity) {
    loader.style.opacity = 1;
    loader.style.zIndex = 99999999999999999;
    document.getElementById("header").style.zIndex = 0;
}
if (loader.style.opacity > 0) {
    loader.style.opacity -= 0.1;
    loader.style.zIndex = 0;
    document.getElementById("header").style.zIndex = 99999999999999999;
} else {
    clearInterval(fadeEffect);
}
}, 90);

//window.addEventListener('load', fadeEffect);