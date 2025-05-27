require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

const loginRoutes = require("./routes/login")

app.use(express.json())

app.use((req,res,next) => {
    next();
})

app.use('/login',loginRoutes)

mongoose
  .connect(process.env.mango_uri)
  .then(() => {
    //listen for request
    app.listen(port, () => {
      console.log("Listeninig... on port !!!", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
