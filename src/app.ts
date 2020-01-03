import { Application } from "express";
import * as express from "express";
import globalConstants from "./config/globalConstants";
import MongodbConnect from "./config/mongodb";
import routesArray from "./api/index";
import { middleWareArrayOne, middleWareArrayTwo } from "./middleware/index";

class App {
  public app: Application;
  public port: number;

  constructor() {
    let mongo = new MongodbConnect();
    this.app = express();
    this.port = globalConstants.port;
    this.middlewares(middleWareArrayOne);
    this.routes(routesArray);
    this.middlewares(middleWareArrayTwo);
    mongo
      .setupDb()
      .then((response) => {
        this.listen();
      })
      .catch((error) => {
        console.log("db error");
      });
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    });
  }

  private routes(routes: { forEach: (arg0: (route: any) => void) => void }) {
    routes.forEach(route => {
      Object.keys(route).forEach(r => {
        this.app.use("/", route[r]);
      });
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default new App();
