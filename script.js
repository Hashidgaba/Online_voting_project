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
//admin functionality
const adminLogin = localStorage.getItem('adminLogin') === 'true';
const admin = document.querySelectorAll(".admin")
let button = document.querySelector(".contactUs")
if (adminLogin) {
    admin.forEach(admin => {
        admin.style.display = 'block'
    })
    loginButton.style.display = 'none'
    Register.style.display = 'none'
    profile.style.display = 'block'
    document.querySelector(".username").innerHTML = '@mhvotingteam'
    document.querySelector(".profileName").innerHTML = 'MH-Team'
    document.getElementById("voterListContainer").style.display = 'none'
    document.querySelector(".voterList").style.display = 'none'
    document.querySelectorAll(".adminHide").forEach(hide => {
        hide.style.display = 'none'
    })  
    button.style.display = 'none'
    document.querySelector(".Dashboard").style.display = 'block'

} else if (isLoggedIn) {
    admin.forEach(admin => {
        admin.style.display = 'none'
    })
    document.querySelectorAll(".adminHide").forEach(hide => {
        hide.style.display = 'block'
    })  

    loginButton.style.display = 'none'
    Register.style.display = 'none'
    profile.style.display = 'block'
} else {
    admin.forEach(admin => {
        admin.style.display = 'none'
    })
    loginButton.style.display = 'block'
    Register.style.display = 'block'
    profile.style.display = 'none'
}

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
        hide.forEach(hide => {
            hide.style.display = 'none'
        })

    } else {

        hide.forEach(hide => {
            hide.style.display = 'block'
        })
    }
});


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

//logout functionality for both admin and user
if (isLoggedIn || adminLogin) {
    if (adminLogin) {
        document.getElementById("logoutButton").style.display = 'block'
        function logout() {
            localStorage.setItem('adminLogin', 'false');
            window.location.href = 'index.html';
        }
      
    } else {
        document.getElementById("logoutButton").style.display = 'block'
        function logout() {
            localStorage.setItem('loggedIn', 'false');
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        }
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
let hide = document.querySelectorAll(".hide");
let header = document.querySelector('.header');
function showProfile() {
    hide.forEach(hide => {
        hide.style.display = 'none'
    })
    profileContent.style.display = 'block';
    leftContent.style.display = 'none';
    rightContent.style.display = 'none'
    profileButton.style.display = 'none'
    removeButton.style.display = 'block'
    header.style.display = 'none'
    document.getElementById("HOME").style.backgroundColor = 'lightgray'

}
function removeProfile() {
    hide.forEach(hide => {
        hide.style.display = 'block'
    })
    header.style.display = 'block'
    profileContent.style.display = 'none';
    leftContent.style.display = 'block';
    rightContent.style.display = 'block'
    profileButton.style.display = 'block'
    removeButton.style.display = 'none'
    document.getElementById("HOME").style.backgroundColor = 'white'

}

