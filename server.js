const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({
    message: "WiFi Kwa Buku backend is running!",
    mode: "sandbox"
  });
});

app.listen(PORT, () => {
  console.log(
    `WiFi Kwa Buku running at http://localhost:${PORT}`
  );
});