const form = document.getElementById('form');
form.addEventListener('submit', addAppointments);

function addAppointments(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const listItem = document.getElementById('container');
    const newList = document.createElement('li');

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name-details';
    nameDiv.textContent = name;

    const emailDiv = document.createElement('div');
    emailDiv.className = 'email-details';
    emailDiv.textContent = email;

    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'phone-details';
    phoneDiv.textContent = phone;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    deleteBtn.textContent = 'delete';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-button';
    editBtn.textContent = 'edit';

    const itemData = {
        Name: name,
        Email: email,
        Phone: phone
    }

    deleteBtn.addEventListener('click', function () {
        newList.remove();
        deletefromLocalStorage(email)
    });

    editBtn.addEventListener('click', function () {
        newList.remove()
        deletefromLocalStorage(email)
        
        const editName = nameDiv.textContent;
        const editEmail = emailDiv.textContent;
        const editPhone = phoneDiv.textContent;

        document.getElementById('name').value = editName;
        document.getElementById('email').value = editEmail;
        document.getElementById('phone').value = editPhone;

        console.log(editName, editEmail, editPhone);
    });

    newList.appendChild(nameDiv);
    newList.appendChild(emailDiv);
    newList.appendChild(phoneDiv);
    newList.appendChild(deleteBtn);
    newList.appendChild(editBtn);

    listItem.appendChild(newList);

    const data = JSON.parse(localStorage.getItem('appointments')) || [];
    data.push(itemData);
    localStorage.setItem('appointments',JSON.stringify(data));

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function deletefromLocalStorage(email){

    const data = JSON.parse(localStorage.getItem('appointments')) || [];

    const itemToDelete = data.find(item => item.Email === email);

    if(itemToDelete){
        const index = data.indexOf(itemToDelete);
        data.splice(index,1);
    }
    localStorage.setItem('appointments',JSON.stringify(data));
}
