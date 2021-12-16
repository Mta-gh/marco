let link = document.querySelector(".link-contact")
let contact = document.querySelector(".contact")
let cross = document.querySelector(".cross")


link.addEventListener('click', function() {
    contact.classList.toggle("active");
});

cross.addEventListener('click', function() {
    contact.classList.toggle("active");
});