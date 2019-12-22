import UserModel from "../../model/user/User.model";

class UserController {
  userModel = null;
  constructor() {
    this.userModel = new UserModel();
  }

  getAllUsers = (req, res) => {
    this.userModel.getAllUsers(d => {
      res.json({ data: d });
    });
  };

  getUserMeta = (req, res) => {
    res.json({ data: [] });
  };

  registerUser = (req, res) => {
    res.json({ data: [] });
  };
}

export default new UserController();
