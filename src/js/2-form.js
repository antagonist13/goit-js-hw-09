const form = document.querySelector(".feedback-form")
const STORAGE_KEY = "data"

let tank = {
        email: "",
        message: ""
    }
form.addEventListener("input", ((event) => {
    if (event.target.className === "email-input") {
        tank.email = event.target.value.trim()
    } else {
        tank.message = event.target.value.trim()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tank))
}))


const emailInput = document.querySelector(".email-input")
const textArea = document.querySelector(".textarea")

const jsn = localStorage.getItem(("data"))
if (jsn) {
emailInput.value = JSON.parse(jsn).email
textArea.value = JSON.parse(jsn).message
} else {
    emailInput.value = ""
    textArea.value = ""
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (emailInput.value === '' || textArea.value.trim() === '') {
        alert('All form fields must be filled in')
        return
    }
    console.log(JSON.parse(localStorage.getItem("data")));
    localStorage.removeItem("data");
  form.reset();
});
