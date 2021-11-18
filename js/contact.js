const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const contactContainer = document.querySelector(".contact-container");

function validateForm() {
  event.preventDefault();
  try {
    if (checkLength(fullName.value, 1)) {
      nameError.style.display = "none";
    } else {
      nameError.style.display = "block";
    }
    if (checkLength(subject.value, 9)) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }
    if (checkLength(address.value, 24)) {
      addressError.style.display = "none";
    } else {
      addressError.style.display = "block";
    }
    if (validateEmail(email.value)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
  } catch (error) {
    console.log(error);
    contactContainer.innerHTML = `<p class="error">Ops! something went wrong:${error}</p>`;
  }
  console.log("Submit");
}

function submitForm(event) {
  event.preventDefault();
  if (
    checkLength(fullName.value, 1) &&
    checkLength(subject.value, 9) &&
    validateEmail(email.value) &&
    checkLength(address.value, 24)
  ) {
    message.innerHTML = `<h3>Thank you! Your message has been sent</h3>`;
    form.reset();
  }
}

form.addEventListener("submit", validateForm);
form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
