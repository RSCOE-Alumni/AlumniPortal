const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const userRouter = require("./routers/user");
const feedRouter = require("./routers/feed");
const admin = require("./routers/admin");
const app = express();

const path = require("path");

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/build")));

// console.log(__dirname);

app.use(userRouter);
app.use(admin);
app.use(feedRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
