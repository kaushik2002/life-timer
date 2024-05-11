// states
let dobInputState = false

// Modals/screens
const dobInputModal = document.getElementById('dob-input-screen');
dobInputModal.style.display = 'none';

const timeLivedScreen = document.querySelector('.time-lived');
timeLivedScreen.style.display = 'none';

const initialScreen = document.querySelector('.dob-initial');
initialScreen.style.display = 'flex';

// Buttons, inputs and screen elements
submitButton = document.getElementById('submit-dob');
const displayYears = document.getElementById('years');
const displayMonths = document.getElementById('months');
const displayDays = document.getElementById('days');
const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');

const resetButton = document.getElementById('reset-btn');

let toggleDOBInput = document.querySelector('.fa-solid');
toggleDOBInput.addEventListener('click', () => {
  dobInputState = !dobInputState;
  if(dobInputState === true) {
    dobInputModal.style.display = 'flex';
  } else {
    dobInputModal.style.display = 'none';
  }
});

submitButton.addEventListener('click', () => {
  setInterval(() => {
    const rawInputDob = document.getElementById('dob-input').value;
    const inputDob = new Date(rawInputDob);
    const dateToday = new Date();
    let timeLived = (dateToday - inputDob)/1000; // This will be in seconds
  
    console.log('input dob: ', inputDob);
    console.log('todays date: ', dateToday);
    console.log('time difference is: ', timeLived);
  
    // changing screens: displaying time lived and closing input screen
    dobInputModal.style.display = 'none';
    initialScreen.style.display = 'none';
    timeLivedScreen.style.display = 'flex';
  
    const years = Math.floor(timeLived/(60*60*24*365));
    console.log(years);
  
    const months = Math.floor(timeLived/(60*60*24*365)) % 12;
    console.log(months);
  
    const days = Math.floor(timeLived/(60*60*24)) % 31;
    console.log(days)
  
    const hours = Math.floor(timeLived/(60*60)) % 24;
  
    const minutes = Math.floor(timeLived/(60)) % 60;
  
    const seconds = Math.floor(timeLived) % 60;
  
    // changing the display time details
    displayYears.innerText = years;
    displayMonths.innerText = months;
    displayDays.innerText = days;
    displayHours.innerText = hours;
    displayMinutes.innerText = minutes;
    displaySeconds.innerText = seconds;
  }, 1000);
});

resetButton.addEventListener('click', () => {
  window.location.reload();
});