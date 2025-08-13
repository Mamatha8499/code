const titleElement = document.getElementById("title");
const outputElement = document.getElementById("output");

async function renderOutput() {
  try {
    const response = await fetch("/output.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    if (data.title) {
      titleElement.textContent = data.title;
    }

    if (data.contentHtml) {
      outputElement.innerHTML = data.contentHtml;
    } else if (data.contentText) {
      outputElement.textContent = data.contentText;
    } else {
      outputElement.innerHTML = `
        <p>No content found. Create <code>/workspace/output.json</code> with either <code>contentHtml</code> or <code>contentText</code>.</p>
      `;
    }
  } catch (error) {
    outputElement.innerHTML = `
      <p>Welcome! Add an <code>output.json</code> file to customize this page.</p>
      <p>Example:</p>
      <pre><code>{
  "title": "Output",
  "contentHtml": "<strong>Hello from your output site.</strong>"
}</code></pre>
    `;
  }
}

renderOutput();