const userCon = require('../../controllers/users')
const router = require('express').Router();


// /api/users
router
    .route('/')
    .get(userCon.getAll)
    .post(userCon.postOne);

// /api/users/:id
router
    .route('/:id')
        .get(userCon.getByID)
        .put(userCon.putOne)
        .delete(userCon.deleteOne);


// /api/users/:id/:friendId
router
    .route('/:id/friends/:friendId')
        .post(userCon.postFriend)
        .delete(userCon.deleteFriend);

module.exports = router;