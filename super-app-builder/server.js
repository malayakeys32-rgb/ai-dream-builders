const express = require('express');
const path = require('path');
const cors = require('cors');
const { generateBlueprint } = require('./builder-core/blueprint-engine');
const { writeProjectToDisk } = require('./builder-core/file-writer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/blueprint', (req, res) => {
  const { idea, type } = req.body;
  const blueprint = generateBlueprint(idea, type);
  res.json(blueprint);
});

app.post('/api/build', (req, res) => {
  const { idea, type } = req.body;
  const blueprint = generateBlueprint(idea, type);
  const result = writeProjectToDisk(blueprint);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Super App Builder running at http://localhost:${PORT}`);
});
