const express = require("express");

const mongoose = require("mongoose");
const PaymentRoute = require("./modules/payment/paymentManager");

//#region Mongo DB connection setup

const MONGO_URI =
  "mongodb+srv://Purav:o6onlCljkyJdMwCF@recieptmanager.o3upl4z.mongodb.net/?retryWrites=true&w=majority&appName=RecieptManager";

mongoose
  .connect(MONGO_URI, {
    dbName: "demoDbname", // To create db
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");

    ///

    // let msg = new DemoModel({
    //   name: "Demo",
    //   age: "21",
    // });

    // msg
    //   .save()
    //   .then((doc) => {
    //     console.log(doc);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    ///
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//#endregion

const app = express();
const port = 3000;

//#region routes allocation

app.use("/payment", PaymentRoute);

//#endregion

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
