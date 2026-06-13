const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auto Caption Backend Running"
  });
});

app.post("/transcribe", (req, res) => {
  res.json({
    success: true,
    captions: [
      {
        start: 0,
        end: 3,
        text: "Hello Everyone"
      },
      {
        start: 3,
        end: 6,
        text: "Welcome To My Video"
      }
    ]
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server Running");
});
