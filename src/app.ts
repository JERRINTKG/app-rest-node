import { Application } from "express";
import * as express from "express";
import routesArray from "./api/index";
import middleWareArray from "./middleware/index";
import globalConstants from "./config/globalConstants";

export default class App {
  public app: Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = globalConstants.port;
    this.middlewares(middleWareArray);
    this.routes(routesArray);
    this.listen();
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

new App();
