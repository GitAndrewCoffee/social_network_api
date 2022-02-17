const router = require('express').Router();
const usersRoutes = require('./users_routes');
// const thoughtsRoutes = require('./thoughts_routes');

router.use('/users', usersRoutes);
// router.use('/thoughts', thoughtsRoutes);

module.exports = router;