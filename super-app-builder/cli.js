#!/usr/bin/env node
const { generateBlueprint } = require('./builder-core/blueprint-engine');
const { writeProjectToDisk } = require('./builder-core/file-writer');

// Usage: node cli.js "My App Idea" web-app
const idea = process.argv[2];
const type = process.argv[3] || 'web-app';

if (!idea) {
  console.log('Usage: node cli.js "<idea>" [type]');
  process.exit(1);
}

const blueprint = generateBlueprint(idea, type);
const result = writeProjectToDisk(blueprint);

console.log(result.message);
console.log('Project created at:', result.path);
