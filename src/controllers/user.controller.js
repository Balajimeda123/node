import asyncHandler from "../utils/asyncHandler.js";
import { handleError, handleSuccess } from "../utils/responseHandlers.js";
import userModel from "../model/user.model.js";

// create user
const CreateUser = asyncHandler(async (req, res) => {
  const emailCheck = await userModel.findOne({ email: req.body.email });
  if (emailCheck) {
    return handleError(
      res,
      "Email already exist, please try using other email",
      409,
      null
    );
  }

  const user = await userModel.create(req.body);
  return handleSuccess(res, "User Created Successfully", 201, user);
});

export { CreateUser };
