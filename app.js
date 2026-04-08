const switcher = document.querySelector(".btn")

switcher.addEventListener("click", function(){
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')

    const className = document.body.className
    if(className == "light-theme") {
        this.textContent = "Tema Escuro"
    } else {
        this.textContent = "Tema Claro"
    }

    console.log("Nome da classe atual: " + className)
})