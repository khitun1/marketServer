const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./db');
const errorMiddleware = require('./middleware/errorHandlerMiddleware');
const router = require('./routes');
const {User, Basket, BasketDevice, Type, Brand, Device, DeviceInfo} = require('./models/index');

const app = express();

app.use(cors)
    .use(express.json())
    .use('/api', router)
    .use(errorMiddleware)

const port = process.env.PORT;


const start = async() => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
        console.log('Server is working on ' + port + ' port');
    })
}

start();