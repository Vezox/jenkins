const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => res.send("Hello World from Jenkins!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
