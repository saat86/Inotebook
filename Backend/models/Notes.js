const mongoose = require('mongoose');

const notesSchema = new Schema({
    title : String, // String is shorthand for {type: String}
    description: String,
    tag: String,
  
    date: { type: Date, default: Date.now },
  
  });

  module.exports=mongoose.Schema('user',notesSchema)