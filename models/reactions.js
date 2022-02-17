//reactionID
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId

//reactionBody
// String
// Required
// 280 character maximum

//username
// String
// Required

//createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

const { Schema, model } = require('mongoose');
// const dateFormat = require('dateFormat');

const reactionSchema = new Schema(
    {
        reactionBody: {
        type: String,        
        required: true,      
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
        // get: createdAtVal => dateFormat(createdAtVal, "dddd, mmmm dS, yyyy, h:MM")
      }
    }    
  );

  const Reactions = model('Reactions', reactionSchema);
  
  module.exports = Reactions;