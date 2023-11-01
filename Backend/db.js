const mongoose = require('mongoose');


const connectDb  = () => {
   mongoose.connect("mongodb+srv://admin:admin@cluster0.oxehnze.mongodb.net/iNotebook"
  );

  console.log("db connected");
}
module.exports =connectDb;