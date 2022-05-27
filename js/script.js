// Scroll Up

const scrollUp = document.querySelector(".scroll-up")
window.addEventListener("scroll", () =>{
    if(this.window.scrollY >= 300){
        scrollUp.classList.add("show-scroll");
    }else{
        scrollUp.classList.remove("show-scroll");
    }
})

