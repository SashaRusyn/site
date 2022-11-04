import express, { request } from "express";
import mongoose from "mongoose";
import { registerValidator } from './Validations/auth-val.js';
import * as UserController from './Controllers/UserController.js'
mongoose
  .connect(
    "mongodb+srv://dasamant:12345@cluster0.xykse60.mongodb.net/rent?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB coneccted"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());

app.post("/auth/register", registerValidator, UserController.register);
app.post("/auth/login", UserController.login);

const PORT = process.env || 3002;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
});
