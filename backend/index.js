const express = require("express");
const app = express();
require("./startup/db")();
const users = require("./routes/signup");
const login = require("./routes/login");
const cors = require("cors");
const corsOptions = {
  origin:"http://localhost:5173",
  exposedHeaders: ["x-auth-token"]
}
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", users);
app.use("/api/users", login);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server listening on port: ", port);
});
