const passcodeInput = document.getElementById('passcode');
const numberButtons = document.querySelectorAll('.number-btn');
const submitButton = document.getElementById('submit-btn');

// Add numbers to the passcode input
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (passcodeInput.value.length < 4) {
      passcodeInput.value += button.textContent;
    }
  });
});

// Submit passcode
submitButton.addEventListener('click', () => {
  if (passcodeInput.value === '1110') {
    window.location.href = 'surprise.html'; // Redirect to the next page
  } else {
    alert('Incorrect passcode! Try again.');
    passcodeInput.value = '';
  }
});

// Calculate days since November 10, 2023
const startDate = new Date('2023-11-10');
const timerElement = document.getElementById('timer');

function updateTimer() {
  const currentDate = new Date();
  const timeDiff = currentDate - startDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  timerElement.textContent = `We've been together for ${daysDiff} days!`;
}

setInterval(updateTimer, 1000);