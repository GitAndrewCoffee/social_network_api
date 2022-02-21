const thoughtCon = require('../../controllers/thoughts');
const reactionCon = require('../../controllers/reactions');
const router = require('express').Router();


// /api/thoughts
router
    .route('/')
    .get(thoughtCon.getAll)
    .post(thoughtCon.postOne);

// /api/thoughts/:id
router
    .route('/:id')
        .get(thoughtCon.getByID)
        .put(thoughtCon.putOne)
        .delete(thoughtCon.deleteOne);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
        .post(reactionCon.getByID)        
        .delete(reactionCon.deleteOne);

module.exports = router;