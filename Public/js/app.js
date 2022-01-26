const contact_form = document.querySelector('.contact_form')

let name = document.getElementById('name')
let email = document.getElementById('email')
let city = document.getElementById('city')
let phone = document.getElementById('phone')
let subject = document.getElementById('subject')
let message = document.getElementById('message')

contact_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        city: city.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
    }

    // console.log(formData);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email Sent');
            name.value = '';
            email.value = '';
            city.value = '';
            phone.value = '';
            subject.value = '';
            message.value = '';
        } else {
            alert('Something Went Wrong!!')
        }
    }

    xhr.send(JSON.stringify(formData));

})