import { Router } from "express";
import jwt from "jsonwebtoken";
import { secret } from "../../config/passport";

import User from "../../models/User";

const router = new Router();

router
    // Creating a new user
    .post("/", (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).send({
            err: `Required fields not found: ${!username && "username "}${!password && "password"}`
        });

        const newUser = new User({
            username,
            password
        })
            .save((err, user) => {
                if (err) return res.status(400).send({ err });

                return res.status(201).send(user);
            });
    })
    // authentication
    .post("/auth", (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).send({
            err: `Required fields not found: ${!username && "username "}${!password && "password"}`
        });

        User.findOne({ username }, function (err, user) {
            if (err) return res.status(400).send(err);
            if (!user) return res.status(400).send({ err: "Cannot find user" });

            return user.comparePassword(password, function (err, isMatch) {
                if (err) return res.status(400).send(err);
                if (!isMatch) return res.status(401).send({ err: "Password is invalid" });

                const payload = {
                    id: user._id
                };

                const token = jwt.sign(payload, secret, {
                    expiresIn: "3d"
                });

                return res.send({ token });
            });
        });
    });

export default router;