/* eslint-disable no-undef */
import bcrypt from 'bcrypt'
import { createAccessToken } from '../utils/createTokens.utils.js'
import { User } from '../model/model.js'
export async function loginController(req, res) {
    const { username, email, password, captcha } = req.body
    try {
        const user = await User.findOne({ username: username, email: email })

        if (!user) return res.status(404).json({ message: "User does not exists" })
        const match = await bcrypt.compare(password, user.password)

        if (!match) return res.status(401).json({ message: "Invalid credentials" })
        const sessionData = {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.id,
        }
        const accessToken = createAccessToken(sessionData, '15m')

        const options = {
            maxAge: 900000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        }
        res.cookie("sessionid", accessToken, options)
        res.status(200).json({ message: "Login successfull" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }

}
