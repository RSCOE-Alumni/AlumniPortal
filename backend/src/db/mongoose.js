const mongoose = require("mongoose");
mongoose.connect(
  // "mongodb+srv://alumni-rscoe:umeshUmang@cluster0.bksgz.mongodb.net/alumniDatabase?retryWrites=true&w=majority",
  "mongodb+srv://Alumni:Alumni@cluster0.sk6muxn.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
