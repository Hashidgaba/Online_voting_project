
let isLoggedIn = localStorage.getItem('loggedIn') === 'true';
const loginButton = document.getElementById('loginButton');
const profile = document.getElementById("profile")
if (isLoggedIn) {
    loginButton.style.display = 'none';
    profile.style.display = 'block'
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    document.querySelector(".username").innerHTML = (`Name: \n ${currentUser.username}`);
    document.querySelector(".useremail").innerHTML = (`Email: \n ${currentUser.email}`);
    
} else {
    loginButton.style.display = 'block'
    profile.style.display = 'none'
    loginButton.addEventListener('click', () => {
        window.location.href = 'Register.html'; // Redirect to login page
    });
}

if (isLoggedIn) {
    document.getElementById("logoutButton").style.display = 'block'

    function logout() {
        localStorage.setItem('loggedIn', 'false');
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html'; // Refresh the page after logout
    }
} else {
    document.getElementById("logoutButton").style.display = 'none'
}

let leftContent = document.querySelector(".content-left");
let rightContent = document.querySelector(".content-right");
let profileContent = document.querySelector(".content-mid");
let profileButton = document.getElementById("profile");
let removeButton = document.getElementById('remove');

function showProfile() {
    profileContent.style.display = 'block';
    leftContent.style.display = 'none';
    rightContent.style.display = 'none'
    profileButton.style.display = 'none'
    removeButton.style.display = 'block'
}
function removeProfile() {
    profileContent.style.display = 'none';
    leftContent.style.display = 'block';
    rightContent.style.display = 'block'
    profileButton.style.display = 'block'
    removeButton.style.display = 'none'
}

