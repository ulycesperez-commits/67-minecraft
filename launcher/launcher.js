#!/usr/bin/env node
// launcher/launcher.js
// Opens Eaglercraft in the default browser for the configured play URL.

const open = require('open');
const url = 'https://eaglercraft.com/play?version=1.8.8';

function printHeader() {
  console.log('Eaglercraft Launcher — Version 26.1.1 wrapper');
  console.log('This launcher opens the Eaglercraft web client in your default browser.');
  console.log('');
}

async function launch() {
  printHeader();
  console.log('Opening:', url);
  try {
    await open(url);
    console.log('If your browser did not open, visit the URL above manually.');
  } catch (err) {
    console.error('Failed to open the browser. Visit the URL manually:', url);
    console.error(err && err.message ? err.message : err);
    process.exitCode = 1;
  }
}

launch();
