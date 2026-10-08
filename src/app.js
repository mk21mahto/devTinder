const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hello dsfh");
});

app.listen(3000, () => {
  console.log("Server is successfuly listening on port 3000");
});
