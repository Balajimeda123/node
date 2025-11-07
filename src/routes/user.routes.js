import { Router } from "express";
import userValidation from "../validations/user.validation.js";
import { CreateUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/createUser", userValidation, CreateUser);

export default userRouter;
