import { body, validationResult } from "express-validator";

import { emailRegix, passwordRegix, nameRegix, usernameRegix } from "../utils/validationRegix.js";
export const validateLogin = [

    body("username")
        .notEmpty()
        .withMessage("username is mandatory"),

    body("email")
        .notEmpty()
        .withMessage("email is mandatory")
        .custom(value => emailRegix.test(value))
        .withMessage("Email is invalid"),

    body("password")
        .notEmpty()
        .withMessage("password is mandatory"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
]


export const validateRegister = [

    body("name")
        .notEmpty()
        .withMessage("Name is mandatory")
        .custom(value => nameRegix.test(value))
        .withMessage("Name at least 3 characters long"),

    body("username")
        .notEmpty()
        .withMessage("username is mandatory")
        .custom(value => usernameRegix.test(value))
        .withMessage("Username must be 3-16 characters long and contain only letters, numbers, or underscores."),


    body("email")
        .notEmpty()
        .withMessage("email is mandatory")
        .custom(value => /^[^@]+@[^@]+\.[^@]+$/.test(value))
        .withMessage("Email is invalid"),

    body("address")
        .notEmpty()
        .withMessage("address is mandatory"),

    body("password")
        .notEmpty()
        .withMessage("password is mandatory")
        .custom(value => passwordRegix.test(value))
        .withMessage("Password must be 8-15 characters, including an uppercase letter, lowercase letter, number, and special character (@.#$!%*?&)—no spaces."),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }
]




