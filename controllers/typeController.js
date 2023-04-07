const {Type} = require("../models");


class TypeController {
    async getTypes (req, res, next) {
        try {
            const types = await Type.findAll();
            res.send(types);
        } catch (e) {

        }
    }

    async getType (req,res, next) {
        try {
            const type = Type.findOne({
                where: {
                    id: req.body,
                }
            })
            res.send(type.name);
        } catch (e) {

        }
    }

    async createType (req, res, next) {
        try {
            const name = req.body;
            await Type.create({name});
            res.send('Type have created!');
        } catch (e) {

        }
    }

    async deleteType (req, res, next) {
        try {
            await Type.destroy({
                where: {
                    id: req.body,
                }
            })
            res.send('Type have deleted!');
        } catch (e) {

        }
    }
}

module.exports = new TypeController();