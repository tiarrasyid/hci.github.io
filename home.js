const navLinksEls = document.querySelectorAll('.nav_links'); 
const windowPathname = window.location.pathname;

navLinksEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
});

function validateData(event) {
    event.preventDefault(); 

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var address = document.getElementById("address");
    var gender = document.getElementById("gender");
    var dob = document.getElementById("dob");
    var terms = document.getElementById("terms");

    if (name.value.length < 4) {
        alert("Username must be at least 4 characters");
    } else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
    } else if (!checkAlphaNum(password.value)) {
        alert("Password must be alphanumeric");
    } else if (address.value.trim() === "") {
        alert("Address must be filled in");
    } else if (gender.value === "") {
        alert("Gender must be selected");
    } else if (dob.value === "") {
        alert("Date of Birth must be selected");
    } else if (!terms.checked) {
        alert("You must agree to the privacy policy");
    } else {
        saveData(name.value, email.value, password.value, address.value, gender.value, dob.value);
        window.location.href = "index.html"; 
    }
}

function checkAlphaNum(password) {
    var isAlpha = false;
    var isNum = false;

    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            isAlpha = true;
        } else {
            isNum = true;
        }
        if (isAlpha && isNum) {
            return true;
        }
    }
    return false;
}

function saveData(name, email, password, address, gender, dob) {
    const userData = {
        name: name,
        email: email,
        password: password,
        address: address,
        gender: gender,
        dob: dob
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log("User data saved:", userData);
}

document.getElementById("registration-form").addEventListener("submit", validateData);

document.getElementById('toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.src = 'asets/eye-off.svg'; 
        this.setAttribute('aria-label', 'Hide password');
    } else {
        passwordInput.type = 'password';
        eyeIcon.src = 'asets/eye.svg'; 
        this.setAttribute('aria-label', 'Show password');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navList = document.querySelector('.nav_list');

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});


const button = document.getElementById('custom-button');
        
button.addEventListener('click', () => {
     window.location.href = "aboutUs.html";
});