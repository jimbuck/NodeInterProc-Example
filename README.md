# Node Inter-Process Communication Example

## Status: _Working!_

This is a very basic example of calling commands from different processes using Socket.io.

Made to answer [this Stack Overflow question](http://stackoverflow.com/questions/28952348/send-message-from-node-js-server-to-client-via-function-call/28953862#28953862).

Instructions to test:

 1. Run `node ./server/server.js`.
 2. Open `http://localhost:3000` in a browser.
 3. Open the developer console in the browser.
 4. Open a new terminal instance.
 5. Run `node ./app/app.js <action> [args ...]` (for example, `node ./app/app.js scream "Hello World!"`)
 6. Check the browser console for the message from the app.
