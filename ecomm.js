const paras = document.querySelectorAll('.nav-dir p');
const dropd = document.querySelectorAll('.dropd');
const arrow = document.querySelectorAll('.arrow');


for (let i = 0; i < paras.length; i++) {
    paras[i].addEventListener("click", function () {
        dropd[i].classList.toggle("show");
        arrow[i].classList.toggle("arrow-rotate")
    })
}