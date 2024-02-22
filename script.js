//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Add event listeners to each input
inputs.forEach((input, index) => {
  input.addEventListener('input', (event) => handleInput(event, index));
  input.addEventListener('keydown', (event) => handleBackspace(event, index));
});

// Function to handle input events
function handleInput(event, index) {
  const value = event.target.value;
  
  // Check if the input has a valid number
  if (!isNaN(value) && value >= 0 && value <= 9) {
    // Move to the next input if the current input is not the last one
    if (index < inputs.length - 1 && value !== '') {
      inputs[index + 1].focus();
    }
  } else {
    // Clear the input if an invalid number is entered
    event.target.value = '';
  }
}

// Function to handle backspace key events
function handleBackspace(event, index) {
  if (event.key === 'Backspace' && index > 0 && event.target.value === '') {
    // Move to the previous input on backspace if the current input is empty
    inputs[index - 1].focus();
  }
}