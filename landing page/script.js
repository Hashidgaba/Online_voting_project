// Checking if the user is logged in
let isLoggedIn = localStorage.getItem('loggedIn') === 'true';
const loginButton = document.getElementById('loginButton');
const profile = document.getElementById("profile");
const Register = document.getElementById("register");
const vote = document.querySelectorAll(".vote");

if (isLoggedIn) {
    loginButton.style.display = 'none';
    Register.style.display = 'none';
    vote.forEach(vote => {
        vote.style.display = 'block';
    });
    profile.style.display = 'block';

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    document.querySelector(".username").innerHTML = (`@${currentUser.username.trim().replace(/\s+/g, '').toLowerCase()}`);
    document.querySelector(".useremail").innerHTML = (`${currentUser.email}`);
    document.querySelector(".profileName").innerHTML = currentUser.username;

    // Display Voting Details
    displayVoterList(currentUser.username);
} else {
    vote.forEach(vote => {
        vote.style.display = 'none';
    });
    Register.style.display = 'block';
    Register.addEventListener('click', () => {
        window.location.href = 'Register.html';
    });
    loginButton.style.display = 'block';
    profile.style.display = 'none';
    loginButton.addEventListener('click', () => {
        window.location.href = 'Register.html';
    });
}

// Function to display the list of voted societies and candidates
function displayVoterList(username) {
    const votedDetails = JSON.parse(localStorage.getItem('votedDetails')) || [];
    const userVotes = votedDetails.filter(detail => detail.username === username);

    const voterListContainer = document.getElementById('voterListContainer');
    if (userVotes.length === 0) {
        voterListContainer.innerHTML = '<p>No votes cast yet.</p>';
        return;
    }

    userVotes.forEach(vote => {
        const societyDiv = document.createElement('div');
        societyDiv.style.marginBottom = '8px';
        societyDiv.style.padding = '8px';
        societyDiv.style.backgroundColor = '#f0f0f0';
        societyDiv.style.borderRadius = '5px';
        societyDiv.innerHTML = `<strong>${vote.society}</strong> - Voted for <strong>${vote.candidate}</strong>`;
        voterListContainer.appendChild(societyDiv);
    });
}

//logout functionality
if (isLoggedIn) {
    document.getElementById("logoutButton").style.display = 'block'

    function logout() {
        localStorage.setItem('loggedIn', 'false');
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html'; 
    }
} else {
    document.getElementById("logoutButton").style.display = 'none'
}
//profile functionality
let leftContent = document.querySelector(".content-left");
let rightContent = document.querySelector(".content-right");
let profileContent = document.querySelector(".content-mid");
let profileButton = document.getElementById("profile");
let removeButton = document.getElementById('remove');
let header = document.querySelector('.header');
function showProfile() {
    profileContent.style.display = 'block';
    leftContent.style.display = 'none';
    rightContent.style.display = 'none'
    profileButton.style.display = 'none'
    removeButton.style.display = 'block'
    header.style.display = 'none'
    document.getElementById("HOME").style.backgroundColor = 'lightgray'

}
function removeProfile() {
    header.style.display = 'block'
    profileContent.style.display = 'none';
    leftContent.style.display = 'block';
    rightContent.style.display = 'block'
    profileButton.style.display = 'block'
    removeButton.style.display = 'none'
    document.getElementById("HOME").style.backgroundColor = 'white'

}

