const btnShow = document.querySelector(".nav-tggle");
const navList = document.querySelector(".nav-list");
const btnClose = document.querySelector(".nav-toggle-close")

btnShow.addEventListener("click", function(){
    navList.classList.add("show-navlist")
})
btnClose.addEventListener("click", function(){
    navList.classList.remove("show-navlist")
})

const navBar = document.querySelector(".nav-bar")
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 200){
        navBar.classList.add("fixed-navlist");
    } else {
        navBar.classList.remove("fixed-navlist");
    }
})