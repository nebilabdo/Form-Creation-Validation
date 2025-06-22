
// Asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element
        const userList = document.createElement('ul');

        // Loop through the users and create <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
