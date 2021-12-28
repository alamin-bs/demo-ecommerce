const express = require("express");
//const db = require("./index");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./routes/authRouter"));
app.use("/", require("./routes/productRouter"));


app.listen(4000, () => {
    console.log(`app is running on 4000`);
  });
