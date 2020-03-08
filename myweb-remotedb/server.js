const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://ylk:092508280505wu@cluster0-9ic3t.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log("Error: ", err.message);
  });

const contactsRouter = require("./routes/contacts");

app.use("/contacts", contactsRouter);

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
