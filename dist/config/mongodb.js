"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const globalConstants_1 = require("./globalConstants");
class MongodbConnect {
    constructor() {
        this.connectionString = globalConstants_1.default.moongodb;
        // this.setupDb();
    }
    setupDb() {
        return new Promise((resolve, reject) => {
            mongoose
                .connect(this.connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
                .then(success => {
                // console.log(success);
                resolve(success);
            })
                .catch(error => {
                // console.log(error.reason);
                reject(error);
            });
        });
    }
}
exports.default = MongodbConnect;
//# sourceMappingURL=mongodb.js.map