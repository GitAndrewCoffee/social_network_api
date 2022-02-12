const Users = require('../models/users');
const Reactions = require('../models/reactions');
const Thoughts = require('../models/thoughts');

const userCon = {

    getAll(req, res) {
        Users.find({})
            .then(dbData => res.jsaon(dbData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getByID({ params }, res) {
        Users.findOne({ _id: params.id })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
    },

    postOne({ body }, res) {
        Users.create(body)
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err));            
    },

    putOne({ params, body }, res) {
        Users.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true} )
        .then(dbData => {
            if(!dbData) {
                res.status(404).json({ message: 'User not found'});
                return;
            }
            res.json(dbData);
        })
        .catch(err => res.json(err));
    },

    deleteOne({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(dbData => res.json(dbData))
            .catch(err => res.json(err));
    }

    //Add Add Friend
    //Add Delete Friend

};

module.exports = userCon;

// /api/users

//     GET all users

//     GET a single user by its _id and populated thought and friend data

//     POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id

//BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId

//     POST to add a new friend to a user's friend list

//     DELETE to remove a friend from a user's friend list
