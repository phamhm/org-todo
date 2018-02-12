const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  content: String,
  status: String,
  tags: [ String ],
  parent_id: Schema.ObjectId,
  userId: String
},{timestamps:{
    createdAt:"created_at",
    updatedAt:"updated_at"}
});
