const headerBtn = document.getElementById("header__btn")
const aside = document.getElementById("aside")

headerBtn.addEventListener("click", () => {
    if(aside.classList.contains("hidden")){
        aside.classList.remove("hidden")
    } else {
        aside.classList.add("hidden")
    }
})