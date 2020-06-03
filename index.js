const express = require("express");
const path = require("path");
require("./server/db");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
