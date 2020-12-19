const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  _id:
    mongoose.Schema.Types.ObjectId
  ,
  events: {
    type: []
  },
  
  categoryColor: {
    type: String
  },
  categoryName: {
    type: String
  }
}, {
    collection: 'categories'
  })

module.exports = mongoose.model('Category', categorySchema)