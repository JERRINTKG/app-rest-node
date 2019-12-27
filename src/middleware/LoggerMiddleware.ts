import LoggerModel from "../model/middleware/Logger.model";

class LoggerMiddleware {
  loggerModel = null;
  constructor() {
    this.loggerModel = new LoggerModel();
  }

  logTheHit = (req, res, next) => {
    let postData = { route: req.path, method: req.method, dateTime: new Date() };
    this.loggerModel.logTheHit(postData,d => {
      // console.log("Success");
    });
    next();
  };
}

export default new LoggerMiddleware();
