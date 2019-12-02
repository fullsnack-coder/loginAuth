'use strict';

module.exports = {
    isAuthenticated: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/signin");
    },
    signMessages: function(app){
        app.use((req, res, next) => {
            app.locals.signupMessage = req.flash("signupMessage");
            app.locals.signinMessage = req.flash("signinMessage");
            app.locals.user = req.user;
            next();
        });
    }
}