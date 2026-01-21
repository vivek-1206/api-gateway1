const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins, all methods, all headers
app.use(cors());
app.use(express.json());

app.get('/info', (req, res) => {
  res.json({
    service: "B",
    info: "OK"
  });
});

app.listen(8080, () => {
  console.log("Service B is running on port 8080");
});
