const express = require('express');
const router = express();
const userRouter = require('./userRouter');
const basketRouter = require('./basketRouter');
const brandRouter = require('./brandRouter');
const deviceRouter = require('./deviceRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter)
    .use('/basket', basketRouter)
    .use('/brand', brandRouter)
    .use('/device', deviceRouter)
    .use('/type', typeRouter);

module.exports = router;