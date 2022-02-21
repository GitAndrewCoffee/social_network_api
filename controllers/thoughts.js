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