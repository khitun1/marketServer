const {Brand} = require("../models");


class BrandController {
    async getBrands (req, res, next) {
        try {
            const brands = await Brand.findAll();
            res.send(brands);
        } catch (e) {

        }
    }

    async getBrand (req,res, next) {
        try {
            const brand = Brand.findOne({
                where: {
                    id: req.body,
                }
            })
            res.send(brand.name);
        } catch (e) {

        }
    }

    async createBrand (req, res, next) {
        try {
            const name = req.body;
            await Brand.create({name});
            res.send('Brand have created!');
        } catch (e) {

        }
    }

    async deleteBrand (req, res, next) {
        try {
            await Brand.destroy({
                where: {
                    id: req.body,
                }
            })
            res.send('Brand have deleted!');
        } catch (e) {

        }
    }
}

module.exports = new BrandController();