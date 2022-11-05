import express from "express";
import mongoose from "mongoose";
import { registerValidator } from './Validations/auth-val.mjs';
import * as UserController from './Controllers/UserController.mjs'
import { join } from "path";
mongoose
  .connect(
    "mongodb+srv://dasamant:12345@cluster0.xykse60.mongodb.net/rent?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB coneccted"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post("/auth/register", UserController.register);
app.post("/auth/login", UserController.login);

const PORT = process.env.PORT || 3002;

const publicPath = "./build";

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(join(publicPath, "index.html"), { root: "." });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
});
