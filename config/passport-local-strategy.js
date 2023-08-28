const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../models/doctor");

// using passport-local for authentication purpose
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    async function (req, email, password, done) {
      try {
        let doctor = await Doctor.findOne({ email: email });
        if (!doctor) {
          return done(null, false);
        }
        const isMatch = await doctor.matchPassword(password);
        if (!isMatch) return done(null, false);
        // if passwords match return doctor
        return done(null, doctor);
      } catch (err) {
        return err;
      }
    }
  )
);

//using jwt-strategy for validating jwt token
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "hospitalApi",
    },
    async (jwtPayload, done) => {
      let user = await Doctor.findById(jwtPayload.doctor._id);
      if (!user) {
        console.log("Error in finding user from JWT");
        return done(null, false);
      }

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);

passport.serializeUser(function (doctor, done) {
  done(null, doctor.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    let doctor = await Doctor.findById(id);
    return done(null, doctor);
  } catch (err) {
    console.log("Error in finding Doctor");
    return;
  }
});

// for checking authentication
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/signin");
};

// for setting local user
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.doctor = req.user;
  }
  next();
};

module.exports = passport;
