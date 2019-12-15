import UserModel from "../../model/user/User.model";

export default class UserController {
  userModel = null;
  constructor() {
    this.userModel = new UserModel();
  }

  getAllUsers(req, res) {
    this.userModel.getAllUsers(d => {
      res.json({ data: d });
    });
  }
}
