const botao = document.querySelector(".btn-fixed")

window.addEventListener("scroll", function (event){
    if(window.scrollY == 0){
        botao.classList.remove("visiblel")
    }
    else{
        botao.classList.add("visible");
    }
});