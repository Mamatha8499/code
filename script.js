function setOutput(text) {
  const outputElement = document.getElementById('output');
  if (!outputElement) return;
  outputElement.textContent = text;
}

function getTimestamp() {
  const now = new Date();
  return now.toLocaleString(undefined, {
    year: 'numeric', month: 'short', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setOutput('Hello! Your output is now displayed as a website.\n\nTip: Edit index.html, styles.css, or script.js to customize.');

  // Example: allow quick update via URL hash, e.g., #Your%20Message
  if (location.hash && location.hash.length > 1) {
    const message = decodeURIComponent(location.hash.slice(1));
    setOutput(message);
  }

  // Example: simple interactive update
  const container = document.querySelector('.card');
  if (container) {
    const buttonRow = document.createElement('div');
    buttonRow.className = 'button-row';

    const timeButton = document.createElement('button');
    timeButton.className = 'button';
    timeButton.textContent = 'Insert timestamp';
    timeButton.addEventListener('click', () => setOutput(`Timestamp: ${getTimestamp()}`));

    const resetButton = document.createElement('button');
    resetButton.className = 'button';
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => setOutput('Hello! Your output is now displayed as a website.'));

    buttonRow.append(timeButton, resetButton);
    container.appendChild(buttonRow);
  }
});