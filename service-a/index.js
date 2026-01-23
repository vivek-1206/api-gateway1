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

app.listen(8080, () => {
  console.log("Service B is running on port 8080");
});
