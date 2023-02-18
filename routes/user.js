const {Router} = require("express")
const UserModel = require("../models/User.model")
const userRouter = Router();

userRouter.get('/users', async (res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  userRouter.get('/users/:id', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  userRouter.post('/users', async (req, res) => {
    const user = new UserModel(req.body);
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
module.exports = userRouter;