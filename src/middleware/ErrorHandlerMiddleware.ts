

class ErrorHandlerMiddleware {
  errorModel = null;
  constructor() {
    // this.errorModel = new ErrorModel();
  }

  errorHandler = (err, req, res, next) => {
    // console.log(err);
    res.json({ status: false, data: [] , message:"process failure" });
  };
}

export default new ErrorHandlerMiddleware();
