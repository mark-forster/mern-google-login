const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require('../models/user.model')
const isAuth = require('../middlewares/isAuth');
const userController = require('../controllers/auth.controller')
router.get(
  "/login-with-google",
  passport.authenticate('google', { scope: ['profile','email'] }));

;

router.get(
  "/login-with-google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:8000/api/v1/failed" }),
  async (req, res)=> {
    // Successful authentication, redirect home.
   const user = req.user;
   req.logout(() => {
      console.log("User logged out");
    })
    res.redirect("http://localhost:5173/success?token="+ user)

  }

);
 

router.get('/dashboard', async (req, res) => {
  if(!req.isAuthenticated()){
    return res.send("Cannot access this page beause you are not logged in")
  }
  res.send("This is dashboard") 
})

router.get("/failed", (req, res) => {
  res.send("Failed to authenticate with google");
});
router.get("/success", (req, res) => {
  res.send({token: req.query?.token});
});

router.get('/profile',isAuth ,userController.getProfile )

module.exports = router;
