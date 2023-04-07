const {Device, DeviceInfo} = require("../models");


class DeviceController {
    async getDevice (req, res, next) {
        try {
            const device = await Device.findOne({
                where: {
                    id: req.body,
                }
            })
            const info = await DeviceInfo.findAll({
                where: {
                    deviceId: device.id,
                }
            })
            res.json({device, info});
        } catch (e) {

        }
    }

    async getDevices (req, res, next) {
        try {
            let devices = [];
            if (!req.body.brand && !req.body.type) {
                devices = Device.findAll();
            }
            else if (req.body.brand) {
                devices = Device.findAll({
                    where: {
                        brandId: req.body.brand,
                    }
                });
            }
            else if (req.body.type) {
                devices = Device.findAll({
                    where: {
                        typeId: req.body.type,
                    }
                });
            }
            else {
                devices = Device.findAll({
                    where: {
                        typeId: req.body.type,
                        brandId: req.body.brand,
                    }
                });
            }
            res.send(devices);
        }
        catch (e) {

        }
    }

    async createDevice (req, res, next) {
        try {
            const {name, price, rating, img, brandId, typeId} = req.body.device;
            const {title, description} = req.body.info;
            const device = await Device.create({name, price, rating, img, brandId, typeId});
            await DeviceInfo.create({title, description, deviceId: device.id});
            res.send('Device have created!');
        } catch (e) {

        }
    }

    async setDeviceRating (req, res, next) {
        try {
            const {id, rating} = req.body;
            await Device.update({rating}, {
                where: id,
            })
            res.send('Rating have added!');
        } catch (e) {

        }
    }

    async deleteDevice (req, res, next) {
        try {
            await Device.destroy({
                where: {
                    id: req.body,
                }
            })
        } catch (e) {

        }
    }
}

module.exports = new DeviceController();