var name = document.getElementsByName("name");
var email = document.getElementsByName("email");
var phone = document.getElementsByName("phone");
var message = document.getElementsByName("message");

var formElement = document.querySelector("contact-form");
var formData = new FormData(formElement);

document.getElementById("submit-form").addEventListener('click', function() {
    console.log(formData)
})