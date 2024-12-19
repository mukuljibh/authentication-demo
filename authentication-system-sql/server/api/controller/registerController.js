
import bcrypt from 'bcrypt'
import { createAccessToken } from "../utils/createTokens.utils.js";
import prisma from "../../db/prismaDb.js";
export async function registerController(req, res) {

    const { name, username, email, password, address } = req.body
    try {
        const encPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name: name,
                username: username,
                password: encPassword,
                email: email,
                address: address
            }
        })
        const sessionData = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.id,
        }
        const accessToken = createAccessToken(sessionData, '60s')

        const options = {
            maxAge: 900000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        }
        res.cookie("sessionid", accessToken, options)
        res.status(200).json({ message: "User created successfully !" });
    }
    catch (error) {
        //this logic  help to prevent registering of user with same email id multiple times
        //conflict error send to client if client place a registration request again.
        if (error.code === 'P2002' && error.meta) {
            const duplicateFields = error.meta.target[0];
            return res.status(409).json({ message: `${duplicateFields} already registered with us.` });

        }
        console.log(error)
        res.status(500).json({ message: "server error" })
    }
}