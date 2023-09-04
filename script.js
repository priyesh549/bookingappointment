var form = document.querySelector('form');
form.addEventListener('submit', addListItem);

function addListItem(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Get the <ul> element by its ID
    const itemList = document.getElementById('container');

    const newItemData = `Name: ${name}, Email: ${email}, Password: ${password}`;

    const newList = document.createElement('li');
    newList.textContent = newItemData;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', function () {
        // Remove the list item when the delete button is clicked
        newList.remove();

        // Remove the item from local storage
        const data = JSON.parse(localStorage.getItem('formData')) || [];
        const index = data.indexOf(newItemData);
        if (index !== -1) {
            data.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(data));
        }
    });

    newList.appendChild(deleteBtn);
    itemList.appendChild(newList);

    // Retrieve existing data from local storage as an array
    const data = JSON.parse(localStorage.getItem('formData')) || [];

    // Add the new item data to the array
    data.push(newItemData);

    // Store the updated array back in local storage
    localStorage.setItem('formData', JSON.stringify(data));

    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
