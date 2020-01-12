import * as express from "express";
import { swaggerUi } from "swagger-ui-express";
// import swaggerDocument from "../documentation/swagger.json";

class SwggerMiddleware {
  router = null;
  constructor() {
    this.router = express.Router();
  }

  addSwagger = (req,res) => {
    // this.router.get("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    return this.router;
  };
}

export default new SwggerMiddleware();
