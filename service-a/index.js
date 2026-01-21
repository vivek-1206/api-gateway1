const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins, methods, and headers
app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({
    service: "A",
    message: "Hello"
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
