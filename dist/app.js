"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const globalConstants_1 = require("./config/globalConstants");
const mongodb_1 = require("./config/mongodb");
const index_1 = require("./api/index");
const index_2 = require("./middleware/index");
class App {
    constructor() {
        let mongo = new mongodb_1.default();
        this.app = express();
        this.port = globalConstants_1.default.port;
        this.middlewares(index_2.middleWareArrayOne);
        this.routes(index_1.default);
        this.middlewares(index_2.middleWareArrayTwo);
        mongo
            .setupDb()
            .then((response) => {
            this.listen();
        })
            .catch((error) => {
            console.log("db error");
        });
    }
    middlewares(middleWares) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }
    routes(routes) {
        routes.forEach(route => {
            Object.keys(route).forEach(r => {
                this.app.use("/", route[r]);
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map