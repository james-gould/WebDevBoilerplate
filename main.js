const express = require('express'),
      path = require('path'),
      exec = require('child_process').exec,
      CONN_PORT = 8080,
      app = express();

// Serve static files from the public/ directory
app.use(express.static(path.join(__dirname, 'public')));

app.on('/', (req, res) => {
    // This will by default serve 'index.html' in the public/ directory. Serve other files like:
    // res.send('public/myHtmlFile.html')
});

// Another route example, this would be http://localhost:8080/DifferentRoute

// app.on('/DifferentRoute', (req, res) => {
//     res.send('public/differentRoute.html');
// });

// Start listening for requests on the given port.
app.listen(CONN_PORT);

// Auto open chrome at the website, for lazy people :-)
// Lets me F5 in VSCode and auto open to the dev site
(_ => {
    exec('start chrome http://localhost:' + CONN_PORT);
})();

