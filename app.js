const switcher = document.querySelector(".btn")
const taskInput = document.querySelector(".task-input")
const addButton = document.querySelector(".add-btn")
const taskList = document.querySelector("ul")

switcher.addEventListener("click", function() {
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')

    const className = document.body.className
    if (className === "light-theme") {
        this.textContent = "Tema Escuro"
    } else {
        this.textContent = "Tema Claro"
    }
})

addButton.addEventListener("click", function() {
    const value = taskInput.value.trim()
    if (!value) return

    const item = document.createElement("li")
    item.textContent = value
    item.classList.add("list")
    taskList.appendChild(item)

    taskInput.value = ""
    taskInput.focus()
})

taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") addButton.click()
})