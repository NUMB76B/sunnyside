const humberger = document.querySelector(".hamburger-menu");
const moblieMenu = document.querySelector(".mobile-menu");



humberger.addEventListener("click",() =>{
    let hasFade = moblieMenu.classList.contains("has-fade");
    if(hasFade){
        moblieMenu.classList.remove("has-fade");
    }
    else{
        moblieMenu.classList.add("has-fade");
    }
})