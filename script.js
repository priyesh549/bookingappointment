var form = document.querySelector('form');
form.addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var date = document.getElementById('date').value
    var time = document.getElementById('time').value

    var newBooking = document.createElement('li');
    newBooking.innerHTML = `
        <strong>Name:</string> ${name} <br>
        <strong>Email:</string> ${email} <br>
        <strong>Date:</string> ${date} <br>
        <strong>Time:</string> ${time} <br>
    `

    const appointment = {
        name,
        email,
        date,
        time
    }

    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    appointments.push(appointment);

    localStorage.setItem('appointments',JSON.stringify(appointments))

    var list = document.getElementById('appointment-list');
    list.appendChild(newBooking);
}