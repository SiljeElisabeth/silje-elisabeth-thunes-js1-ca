const form = document.querySelector("#contactForm");

form.onsubmit = function() {
    event.preventDefault();


    const name = document.querySelector("#name");
    console.log(name.value);
}
