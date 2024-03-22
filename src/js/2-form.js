const form = document.querySelector(".feedback-form")

form.addEventListener("input", ((event) => {
    // let email
    // let comment
    if (event.target.className === "email-input") {
        // email = event.target.value
        localStorage.setItem("email", event.target.value);
    } else {
        // comment = event.target.value
        localStorage.setItem("comment", event.target.value);
    }
}))

form.addEventListener("submit", (event) => {
  event.preventDefault();
	console.log(event.target.elements.message.value);
    localStorage.removeItem("email");
    localStorage.removeItem("comment");
  form.reset();
});
