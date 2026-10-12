const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://manishmahto2196_db_user:uDeoO42WzprqnQqj@namastedev.wkbqy8e.mongodb.net/?appName=NamasteDev",
  );
};

module.exports = connectDB;

///uDeoO42WzprqnQqj
