import ErrorHandlerModel from "../model/middleware/ErrorHandler.model";

class ErrorHandlerMiddleware {
  errorModel = null;
  constructor() {
    this.errorModel = new ErrorHandlerModel();
  }

  errorHandler = (err, req, res, next) => {
    let postData = {
      route: req.path,
      method: req.method,
      dateTime: new Date(),
      error: err
    };
    this.errorModel.logTheError(postData, d => {
      res.json({ status: false, data: [], message: "process failure" });
    });
  };
}

export default new ErrorHandlerMiddleware();
