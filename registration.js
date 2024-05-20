var btn = document.getElementById('registration-button')

function leftClick(){
    btn.style.left = '0'
}

function rightClick(){
    if(window.innerWidth <= 412){
        btn.style.left = '105px'
    }
    else{
        btn.style.left = '200px'
    }
    
}

const slideValue = document.querySelector("span");
const inputSlider = document.getElementById('registration-ageSlider-input');

inputSlider.oninput = (()=>{
    let value  = inputSlider.value;
    slideValue.textContent = value;
})


document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username");
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var age = document.getElementById('registration-ageSlider-input');

    var isValid = true;

    if (username.value.length < 6) {
        alert("Username must be at least 6 characters");
        isValid = false;
    } else if (!email.value.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com");
        isValid = false;
    } else if (!checkAlNum(password.value)) {
        alert("Password must contain at least a number and a character");
        isValid = false;
    }

    if (isValid) {
        alert('Success submit data');
        window.location.href = 'index.html'; 
    }
});

function checkAlNum(password) {
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

function checkAlNum(password){
    var isAlpha = false;
    var isNum = false;
    for(let i =0 ; i<password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true;
        }
        else{
            isNum = true;
        }
        if(isAlpha && isNum){
            return true;
        }
    }
    return false;
}