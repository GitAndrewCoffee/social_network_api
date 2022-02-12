//thoughtText
//String
//Required
//minLength 1 maxLength(280)

//createdAt
//Date
//Set default to current time
//use a getter method to format the timestamp on query

//username
//String
//Required

//reactions
//Array of nested documents created with the reactionSchema

const { Schema, model } = require('mongoose');
const dateFormat = require('dateFormat');

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,        
        required: true,
        minLength: [1, 'Please enter a comment'],
        maxLength: [280, 'Max length 280 characters']
      },
      username: {
          type: String,
          required: true
        },
      createdAt: {
        type: Date,
        default: true,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal, "dddd, mmmm dS, yyyy, h:MM")
      },      
      reactions: [{
          type: Schema.Types.ObjectId,
          ref: 'reactionSchema'
        }]
    }    
  );

  const Thoughts = model('Thoughts', thoughtSchema);
  
  module.exports = Thoughts;