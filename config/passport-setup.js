const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: '6165811710231-cpi5rg74e25eldd05t9v',
        clientSecret: '1fcAa5NyAWOpuEeVY7wsd3TW'
    }, () => {
        // passport callback function
    })
);
