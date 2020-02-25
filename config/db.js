const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/geo", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connect;
