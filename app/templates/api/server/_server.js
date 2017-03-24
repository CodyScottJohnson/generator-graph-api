"use strict";

if (process.env.NODE_ENV === "production"){
    require("newrelic");
  }
const PORT = process.env.PORT || 1234;

import fs from "fs";
import os from "os";
import http2 from "spdy";
import http from "http";
import Koa from "koa";
import cors from 'kcors';
import routerCb from "koa-router";
import RoutesConfig from "./config/routes.conf";
import DBConfig from "./config/db.conf";
import Routes from "./routes/index";
import authController from './auth/user_auth';


const router = new routerCb();
const app = new Koa();
app.use(cors())
/*app.oauth = oauthserver({
  model: require('./auth/model/oauth-model'),
  grants: ['password'],
});*/
//DBConfig.init();
//DBConfig.Main.Schema(_clientSchema);

RoutesConfig.init(app, router);
Routes.init(app, router,authController,DBConfig);

const opts = {
  key: fs.readFileSync(__dirname + "/cert/server.key"),
  cert: fs.readFileSync(__dirname + "/cert/server.crt")
};
http.createServer(app.callback()).listen(PORT);
http2.createServer(opts, app.callback())
     .listen(3333, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });
