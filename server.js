const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files like index.html and styles.css
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to return hostname
app.get('/api/hostname', (req, res) => {
  res.send(os.hostname());
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
