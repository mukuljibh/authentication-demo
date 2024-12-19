import axios from "axios";

export default async function verifyCaptcha(req, res, next) {
    const { captcha } = req.body
    try {
        const googleResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
            params: {
                secret: process.env.CAPTCHA_SECRET_KEY,
                response: captcha,
            },
        });
        const { success } = googleResponse.data
        if (!success) {
            return res.status(404).json({ message: "Invalid reCAPTCHA. Please try again." })
        }
        next()
    }
    catch (err) {
        return res.status(500).json({ message: "Something goes wrong during verification of reCAPTCHA" })

    }
}