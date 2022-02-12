const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./thoughts');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid Email Address']
      },      
      thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughtSchema'
      }],
      friends: [{
          type: Schema.Types.ObjectId,
          ref: 'userSchema'
        }]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      // prevents virtuals from creating duplicate of _id as `id`
      id: false
    }
  );

  userSchema.virtual('friendsCount').get(function() {
    return this.friends.length + 1;    
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;