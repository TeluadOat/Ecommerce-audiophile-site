const paras = document.querySelectorAll('.nav-dir p');
const dropd = document.querySelectorAll('.dropd');
const arrow = document.querySelectorAll('.arrow');
const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');

for (let i = 0; i < paras.length; i++) {
    paras[i].addEventListener("click", function (e) {
        dropd[i].classList.toggle("block-show");
        arrow[i].classList.toggle("arrow-rotate");
        e.stopPropagation();
    })
    document.addEventListener("click", (e) => {
        if (!paras[i].contains(e.target) && !dropd[i].contains(e.target)) {
            dropd[i].classList.remove("block-show");
            arrow[i].classList.remove("arrow-rotate");
        }
    })
}

menuToggle.addEventListener("click", function (e) {
    menuDropdown.classList.toggle("collapsed");
    e.stopPropagation();
})

document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !menuDropdown.contains(e.target)) {
        menuDropdown.classList.add("collapsed")
    }
})