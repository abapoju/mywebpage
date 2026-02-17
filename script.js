const slider = document.getElementById("slider");
const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

goSignup.onclick = () => {
    slider.style.transform = "translateX(-420px)";
};

goLogin.onclick = () => {
    slider.style.transform = "translateX(0)";
};