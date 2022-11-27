module.exports = function(client) {
    const express = require('express');
    const {
        Discord,
        Client,
        Message,
        Intents,
        MessageEmbed,
        Collection,
        Permissions,
        MessageActionRow,
        MessageButton
    } = require("discord.js");
    const ejs = require('ejs');
    const app = express();
    const {
        exec
    } = require('child_process')
    const path = require('path')
    const url = require(`url`);
    const port = 3000;
    const bodyParser = require('body-parser');
    const moment = require("moment-timezone");
    moment.locale('tr')
    const fs = require("fs")
    const passport = require(`passport`);
    const db = (global.db = {});
    const Strategy = require(`passport-discord`).Strategy;
    const { config } = require('./config.json');
    var PORT = 3000;
      const IDler = {
        botID: "BOTID", //Bot Client Id
        botSecret: "BOTSCLIENTSECRET", //Bot Client Secret 
        botCallbackURL: "https://DisocrdOAuthLogin.egehan0250.repl.co/auth/discord/callback", //CALBACK URL
    };
    console.log("Starting the Dashboard")
    console.log("Starting the Login system")
    console.log("Starting the Home page")
    const session = require(`express-session`);
    const MemoryStore = require(`memorystore`)(session);
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((obj, done) => done(null, obj));
    passport.use(new Strategy({
        clientID: "BOTID", //Bot Client Id
        clientSecret: "BOTSCLIENTSECRET", //Bot Client Secret 
        callbackURL: "https://DisocrdOAuthLogin.egehan0250.repl.co/auth/discord/callback", //CALBACK URL
        scope: [`identify`, `guilds`, `guilds.join`, `email`]
    }, (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => done(null, profile));
    }));
    app.use(session({
       store: new MemoryStore({ checkPeriod: 86400000 }),
        secret: `#@%#&^$^$%@$^$&%#$%@#$%$^%&$%^#$%@#$%#E%#%@$FEErfgr3g#%GT%536c53cc6%5%tv%4y4hrgrggrgrgf4n`, //Secrets Key
        resave: false,
        saveUninitialized: false,
    }));
  app.use(passport.initialize());

app.use(passport.session());
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.set('views', path.join(__dirname, './www'))
    app.use(express.static('www'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.static(path.join(__dirname, '/'), {
        dotfiles: 'allow'
    }));
    app.use("/css", express.static(path.join(__dirname, "./css")));
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((obj, done) => {
        done(null, obj);
    });
    const scopes = ["identify", "guilds", "guilds.join", "email"];
    passport.use(
        new Strategy({
                clientID: IDler.botID,
                clientSecret: IDler.botSecret,
                callbackURL: IDler.botCallbackURL,
                scope: scopes
            },
            async (accessToken, refreshToken, profile, done) => {
                process.nextTick(() => done(null, profile));
            
            }
        )
    );
    app.use(
        session({
            secret: "secret-session-thing",
            resave: false,
            saveUninitialized: false
        })
    );
  app.use(passport.initialize());
  app.use(passport.session());
    app.get(
        "/login",
        passport.authenticate("discord", {
            scope: scopes
        })
    );
    app.get(
        "/auth/discord/callback",
        passport.authenticate("discord", {
            failureRedirect: "/404",
        }),
        async (req, res, profile) => {
            res.redirect("/");
           
        }
    );
  
    app.get(`/`, async (req, res) => {
        if (!req.user) {
            res.render("index", {
                user: req.user,
            });
        } else {
            res.render("index", {
                user: req.user,
            });
        }
    });



    app.listen(port, () =>
        console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
    );
}
