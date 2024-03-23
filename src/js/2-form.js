const form = document.querySelector(".feedback-form")
const STORAGE_KEY = "feedback-form-state"

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

const jsn = localStorage.getItem(("feedback-form-state"))
if (jsn) {
emailInput.value = JSON.parse(jsn).email
textArea.value = JSON.parse(jsn).message
} else {
    emailInput.value = ""
    textArea.value = ""
}

const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (emailInput.value === '' || textArea.value.trim() === '') {
        alert('All form fields must be filled in')
        return
    }
    if ((storedData.email && !storedData.message) || (!storedData.email && storedData.message)) {
        alert('Data entry error. To solve the problem - refresh the page ');
        return;
    }
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
  form.reset();
});
