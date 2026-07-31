# Eaglercraft Launcher (26.1.1 wrapper)

What this launcher does
- Opens the Eaglercraft web client at https://eaglercraft.com/play?version=1.8.8
- Does NOT include or distribute any Mojang or Eaglercraft binaries/assets — it is a pointer/wrapper only.

Requirements
- Node.js 14+ (to run the launcher)
- Internet connection (the launcher opens the web client URL)

Install and run locally
1. cd launcher
2. npm install
3. node launcher.js
   - or: npx --yes ./launcher.js
   - or: npm run start

Optional (global CLI)
- From the launcher directory: npm link
- Then run: eagler-launch

License & distribution
- This repository does not include Mojang or Eaglercraft proprietary assets.
- If you want the repo to include client jars or assets, you must confirm redistribution rights.

Notes
- The manifest versions/26.1.1/26.1.1.json is metadata only and points to the play URL.
