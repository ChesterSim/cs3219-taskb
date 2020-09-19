const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  description: String
})

todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  }
})

module.exports = mongoose.model('Todo', todoSchema);