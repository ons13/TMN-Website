const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const GOOGLE_CLIENT_ID =
  "296377947195-6h923bn6i4bn7smrn92um8asg6itvv80.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(err, profile);
    }
  )
);

passport.serializeUser(function (uuser, done) {
  done(null, user);
});

passport.deserializeUser(function (uuser, done) {
  done(null, user);
});
