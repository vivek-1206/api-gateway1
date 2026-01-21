const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Simple test endpoint
app.get('/hello', (req, res) => {
  res.json({
    service: "A",
    message: "Hello"
  });
});

// Cloud Run requires PORT from env and 0.0.0.0 binding
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Service A running on port ${PORT}`);
});
