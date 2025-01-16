let displayValue = ''; // Initialize an empty string for display

// Append number or operator to the display
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

// Clear the display
function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

// Calculate the result
function calculateResult() {
  try {
    displayValue = eval(displayValue).toString(); // Use eval to calculate the result
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error'; // If invalid input, show Error
    displayValue = ''; // Reset displayValue in case of error
  }
}

// Handle keyboard input
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (!isNaN(key)) {
    // Append number to display if key is a number
    appendToDisplay(key);
  } else if (['+', '-', '*', '/'].includes(key)) {
    // Append operator to display if key is an operator
    appendToDisplay(key);
  } else if (key === 'Enter') {
    // Calculate result on Enter key press
    calculateResult();
  } else if (key === 'Backspace') {
    // Remove last character on Backspace key press
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  } else if (key === 'Escape') {
    // Clear the display on Escape key press
    clearDisplay();
  }
});
