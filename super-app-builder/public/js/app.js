const ideaInput = document.getElementById('idea');
const typeSelect = document.getElementById('type');
const output = document.getElementById('output');

async function callApi(endpoint) {
  const idea = ideaInput.value.trim();
  const type = typeSelect.value;

  if (!idea) {
    output.textContent = 'Please enter an app idea first.';
    return;
  }

  output.textContent = 'Working...';

  try {
    const res = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idea, type })
    });
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = 'Error: ' + err.message;
  }
}

document.getElementById('previewBtn').addEventListener('click', () => callApi('blueprint'));
document.getElementById('buildBtn').addEventListener('click', () => callApi('build'));
