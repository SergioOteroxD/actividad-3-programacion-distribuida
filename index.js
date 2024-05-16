const express = require("express");

const app = express();

app.set("case sensitive routing", true);

app.get("/home", (req, res) => {
  res.send("Usted ha llegado al home");
});

app.get("/", (req, res) => {
  res.send("Raíz principal");
});

app.listen(3000);
console.log("Server on port 3000");
