const Users = require('../models/users');
const Reactions = require('../models/reactions');
const Thoughts = require('../models/thoughts');

const userCon = {

    getAll(req, res) {
        Users.find({})
            .then(dbData => res.json(dbData))
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
    },

    postFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id},
            { $ADDtOsET: {friends: params.friendId} },
            {new: true}
        )
        .then(dbData => {
            if(!dbData) {
                res.status(404).json({ message: 'invalid user id'});
                return;
            }
            res.json(dbData)
        })
        .catch(err => res.json(err));    
    },

    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id},
            { $pull: {friends: params.friendId} },
            {new: true}
        )
        .then(dbData => res.json(dbData))
        .catch(err => res.json(err));    
    }

};

module.exports = userCon;