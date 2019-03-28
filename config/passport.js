import passport from "passport";
import passportJWT from "passport-jwt";
import User from "../models/User";
// For environment variables
require("dotenv").config();

const { Strategy, ExtractJwt } = passportJWT;

const secret = process.env.SECRET_OR_KEY;
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
};
const strategy = new Strategy(options, function (payload, next) {
    User.findOne({ _id: payload.id }, function (err, result) {
        if (err) return next(err);

        return next(null, result);
    });
});

passport.use(strategy);

const auth = passport.authenticate("jwt", { session: false });

export default passport;
export { secret, auth };