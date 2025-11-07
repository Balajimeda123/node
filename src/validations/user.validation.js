import { body } from "express-validator";

const userValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is Required")
    .isString()
    .withMessage("Name should be in a string"),
  body("mobile")
    .notEmpty()
    .withMessage("Phone Number is required")
    .isNumeric()
    .withMessage("it accept only numbers"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isString()
    .withMessage("email must be in string"),
  body("address")
    .notEmpty()
    .withMessage("address is required")
    .isString()
    .withMessage("address must be in string"),
  body("companyName")
    .notEmpty()
    .withMessage("companyName is required")
    .isString()
    .withMessage("companyName must be in string"),
  body("companyType")
    .notEmpty()
    .withMessage("companyType is required")
    .isString()
    .withMessage("companyType must be in string"),
  body("location")
    .notEmpty()
    .withMessage("Location is required")
    .isString()
    .withMessage("Location must be a string"),

  body("experience")
    .notEmpty()
    .withMessage("Experience is required")
    .isString()
    .withMessage("Experience must be a string"),
];

export default userValidation;
