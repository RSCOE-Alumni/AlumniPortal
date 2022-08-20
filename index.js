const express = require("express");
require("./src/db/mongoose");
const cors = require("cors");
// const userRouter = require("./src/routers/user");
const userRouter = require("./src/routers/user");
const feedRouter = require("./src/routers/feed");
const admin = require("./src/routers/admin");
const app = express();

const path = require("path");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "/frontend/build")));

// console.log(__dirname);

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "/frontend/public/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use(userRouter);
app.use(admin);
app.use(feedRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
