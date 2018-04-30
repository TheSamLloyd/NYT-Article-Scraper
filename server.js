const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001
const app = express()
const apiRoutes = require("./routes/apiRoutes")

app.use(express.static("client/build"))
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api", apiRoutes)
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function () {
  console.log(`Server now listening on port ${PORT}!`);
});