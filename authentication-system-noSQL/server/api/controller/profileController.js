import { User } from "../model/model.js"
export async function profileController(req, res) {
    try {
        const users = await User.find({})
        res.status(200).json({ message: "All profile send from the database", users })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })
    }
}