const mongoose = require('mongoose');
const slug = require('slugs');
mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]
});

// Acts like middleware to mongoose, do this when save
storeSchema.pre('save', function(next) {
  // So that we only generate a slug if name has changed
  if (!this.isModified('name')) return next();
  this.slug = slug(this.name);
  next();
  // TODO: Add check to ensure slugs are unique
});
module.exports = mongoose.model('Store', storeSchema);

