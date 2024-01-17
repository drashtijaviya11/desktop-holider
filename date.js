day.addEventListener("click", (event) => {
    const selectedDate = event.target.textContent;

    if (!isNaN(selectedDate)) {
        const abbreviatedMonth = months[month].slice(0, 3); // Get the first three characters of the month
        const selectedDateString = `${abbreviatedMonth} ${selectedDate}, ${year}`;
        document.getElementById("pickupDateText").textContent = selectedDateString;

        document.querySelectorAll('.calendar-dates li').forEach(dateElement => {
            dateElement.classList.remove('active');
        });

        event.target.classList.add('active');

        calenderContainer.classList.remove("active");
    }
});



// hours-container

let selectedPeriod = ''; // Variable to track selected AM or PM

function openHoursContainer() {
    document.querySelector('.hours-container').style.display = 'block';
}

function closeHoursContainer() {
    document.querySelector('.hours-container').style.display = 'none';
}

function setSelectedTime() {
    const hourValue = document.querySelector('.hour').value;
    const minuteValue = document.querySelector('.minute').value;
    
    if (selectedPeriod !== '') {
        const selectedTime = hourValue.padStart(2, '0') + ':' + minuteValue.padStart(2, '0') + ' ' + selectedPeriod;
        document.querySelector('.cl-tx').innerText = selectedTime;
    } else {
        document.querySelector('.cl-tx').innerText = 'Select AM or PM';
    }
    
    closeHoursContainer();
}

function clearInputValue(input) {
    input.value = '';
}

function selectAM() {
    selectedPeriod = 'AM';
    document.querySelector('.am-btn').classList.add('selected');
    document.querySelector('.pm-btn').classList.remove('selected');
}

function selectPM() {
    selectedPeriod = 'PM';
    document.querySelector('.pm-btn').classList.add('selected');
    document.querySelector('.am-btn').classList.remove('selected');
}

