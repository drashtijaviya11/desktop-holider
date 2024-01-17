// profile-btn menu drop-down
const proBtn = document.querySelector(".pro-btn");
const dropList = document.querySelector(".drop-list");

proBtn.addEventListener("click", () => {
    dropList.classList.toggle("active");
});



// country-drop-down

function toggleDropdown() {
    var dropdown = document.getElementById("countryDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
}


function selectCountry(element, countryName) {
    var countryLinks = document.querySelectorAll('.c-name');
    countryLinks.forEach(function(link) {
        link.classList.remove('selected-country');
    });

    document.querySelector('.con-btn .con-text').textContent = countryName;

    element.classList.add('selected-country');
}





// login page otp button

const codeButton = document.getElementById("code");
const inOtp = document.querySelector(".in-otp");
const loginImage = document.getElementById("loginImage");

codeButton.addEventListener("click", () => {
    inOtp.classList.toggle("active");
});


// adult-child selection

function changeValue(amount) {
    var numElement = document.querySelector('.num');
    var currentValue = parseInt(numElement.innerText);
    var newValue = currentValue + amount

    if (newValue >= 1 && newValue <= 15) {
        numElement.innerText = newValue;
    }
}

function changeValue1(amount) {
    var numberElement = document.querySelector('.number');
    var currentValue = parseInt(numberElement.innerText);
    var newValue = currentValue + amount
    
    if (newValue >= 0 && newValue <= 15) {
        numberElement.innerText = newValue;
    }
}






// terms and condition dd

function toggleTextSec() {
    var textSec = document.querySelector('.text-sec');
    var arrowImg = document.getElementById('arrow-img');

    textSec.style.display = (textSec.style.display === 'none' || textSec.style.display === '') ? 'block' : 'none';

    arrowImg.classList.toggle('rotate');
}






// voucher-page

function showTab(tabName, buttonClass) {
    var tabs = document.querySelectorAll('.main-fv, .main-uv');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var buttons = document.querySelectorAll('.f-ord, .u-ord');
    buttons.forEach(function(button) {
        button.classList.remove(buttonClass + '-selected');
    });

    document.querySelector('.' + tabName).style.display = 'block';

    var clickedButton = document.querySelector('.' + buttonClass);
    clickedButton.classList.add(buttonClass + '-selected');

    buttons.forEach(function(button) {
        if (button !== clickedButton) {
            button.style.color = '';
            button.style.background = '';
        }
    });
    clickedButton.style.color = '#fff';
    clickedButton.style.background = '#00B5DC';


}
