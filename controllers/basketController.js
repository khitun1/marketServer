const {Basket, BasketDevice, Device} = require("../models");

class BasketController {
    async getBasket (req, res, next) {
        try {
            const basket = await Basket.findOne({
                where: {
                    userId: req.user.id,
                }
            })
            const devicesInBasket = await BasketDevice.findAll({
                where: {
                    basketId: basket.id,
                }
            })
            let devices = [];
            for (const p of devicesInBasket) {
                const device = await Device.findOne({
                    where: {
                        id: p.deviceId,
                    }
                })
                devices.push(device);
            }
            req.json({devices, idBasket: basket.id});
        } catch (e) {

        }
    }

    async clearBasket (req, res, next) {
        try {
            await BasketDevice.destroy({
                where: {
                    basketId: req.body,
                }
            })
        } catch (e) {

        }
    }

    async removeItemFromBasket (req, res, next) {
        try {
            await BasketDevice.destroy({
                where: {
                    deviceId: req.body.id,
                    basketId: req.body.basket,
                }
            })
            res.send('Item have removed!');
        } catch (e) {

        }
    }

    async addItemToBasket (req, res, next) {
        try {
            const {basketId, deviceId} = req.body;
            await BasketDevice.create({basketId, deviceId});
            res.send('Item have added to basket!');
        } catch (e) {

        }
    }
}

module.exports = new BasketController();