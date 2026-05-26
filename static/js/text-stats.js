// Get DOM elements
const textInput = document.getElementById("text-input");
const statsResult = document.getElementById("stats-result");

// Function to calculate and display statistics
const updateStats = (text) => {
  const charCount = text.length;
  // Simple word count: split by whitespace and filter out empty strings
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Generate HTML for the stats result
  const statsHtml = `
    <div style="margin-top: 15px; padding: 10px; border: 1px solid #eee; display: flex; gap: 20px;">
      <div><strong>Characters:</strong> ${charCount}</div>
      <div><strong>Words:</strong> ${wordCount}</div>
    </div>
  `;

  statsResult.innerHTML = statsHtml;
};

// 1. Initial run on load
updateStats(textInput.value);

// 2. Event listeners for real-time updates
textInput.addEventListener("input", () => updateStats(textInput.value));
textInput.addEventListener("change", () => updateStats(textInput.value));