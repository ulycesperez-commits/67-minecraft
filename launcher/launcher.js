#!/usr/bin/env node
// launcher/launcher.js
// Opens Eaglercraft in the default browser for the configured play URL.

const open = require('open');
const args = process.argv.slice(2);

function showHelp() {
  console.log('Eaglercraft Launcher — Usage');
  console.log('  launcher [--url <url>] [--no-open]');
  console.log('Options:');
  console.log('  --url <url>    Override the default play URL (positional URL is also accepted)');
  console.log('  --no-open      Print the URL but do not open the browser');
  console.log('  -h, --help     Show this help message');
  process.exit(0);
}

let url = 'https://eaglercraft.com/play?version=1.8.8';
let noOpen = false;

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--help' || a === '-h') showHelp();
  if (a === '--no-open') noOpen = true;
  if (a === '--url' && args[i + 1]) {
    url = args[i + 1];
    i++;
    continue;
  }
  if (a.startsWith('--url=')) {
    url = a.split('=')[1];
    continue;
  }
  // allow first positional arg to be a URL
  if (i === 0 && !a.startsWith('-') && (a.startsWith('http://') || a.startsWith('https://'))) {
    url = a;
  }
}

function printHeader() {
  console.log('Eaglercraft Launcher — Version 26.1.1 wrapper');
  console.log('This launcher opens the Eaglercraft web client in your default browser.');
  console.log('');
}

async function launch() {
  printHeader();
  console.log('Play URL:', url);
  if (noOpen) {
    console.log('Skipping opening the browser (flag --no-open specified).');
    return;
  }

  try {
    await open(url);
    console.log('Browser opened. If it did not, visit the URL above manually.');
  } catch (err) {
    console.error('Failed to open the browser. Visit the URL manually:', url);
    console.error(err && err.message ? err.message : err);
    process.exitCode = 1;
  }
}

launch();
