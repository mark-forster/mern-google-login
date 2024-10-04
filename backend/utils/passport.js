const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authController= require('../controllers/auth.controller')
module.exports= (passport)=>{
    passport.use(new GoogleStrategy({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
      },
     async function(accessToken, refreshToken, profile, cb) {
           await authController.loginWithGoogle(profile,cb)
           
      }
    ));

    passport.serializeUser(function(user, done){
    
      done(null, user);
    });
    
    passport.deserializeUser(function(user, done){
    
    done(null, user);
     
  })

    
}