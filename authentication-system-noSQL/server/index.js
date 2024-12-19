import express from 'express'
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import makeDbConnection from './db/db.js';
import { registerController } from './api/controller/registerController.js';
import { loginController } from './api/controller/loginController.js';
import { profileController } from './api/controller/profileController.js';
import { verifyToken } from './api/middleware/verifyToken.js';
import { validateLogin, validateRegister } from './api/validation-schema/validationSchema.js';
import verifyCaptcha from './api/middleware/verifyCaptcha.js';
dotenv.config({ path: ".env" });

const app = express()


app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: [process.env.PUBLIC_CLIENT_URL],
    credentials: true,
    optionSuccessStatus: 200,
    methods: 'GET,POST',
}));


app.post('/login', validateLogin, verifyCaptcha, loginController)
app.post('/register', validateRegister, registerController)
app.get('/profile', verifyToken, profileController)

makeDbConnection(app)

