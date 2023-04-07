const jwt = require('jsonwebtoken');
const {User, Basket} = require("../models");
const bcrypt = require('bcrypt');

const generateJwt = (id, login, isAdmin) => {
    return jwt.sign({
        id, login, isAdmin
    },
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController {
    async login (req,res,next) {
        try {
            const {login, password} = req.body;
            const user = await User.findOne({
                where: {
                    login
                }
            })
            if (!user) {
                return res.send('Incorrect login!');
            }
            const comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return res.send('Incorrect password!');
            }
            const token = generateJwt(user.id, user.login, user.isAdmin);
            return res.send(token);
        } catch (e) {

        }
    }

    async signUp (req, res, next) {
        try {
            const {login, password, isAdmin} = req.body;
            const same = await User.findOne({
                where: {
                    login
                }
            })
            if (same) {
                return res.send('Login is already exists');
            }
            const hash = await bcrypt.hash(password, 5);
            const user = await User.create({login, password: hash, isAdmin});
            const basket = await Basket.create({userId: user.id});
            const token = generateJwt(user.id, user.login, user.isAdmin);
            return res.send(token);
        } catch (e) {

        }
    }

    async auth (req, res, next) {
        try {
            const user = req.user;
            const token = generateJwt(user.id, user.login, user.isAdmin);
            res.send(token);
        } catch (e) {

        }
    }
}

module.exports = new UserController();