import jwt from 'jsonwebtoken'

//this middle ware is used for checks token are valid or not

export async function verifyToken(req, res, next) {
    try {
        const { sessionid } = req.cookies
        if (!sessionid) {
            return res.status(403).json({ message: "No token found" })
        }
        jwt.verify(sessionid, process.env.ACCESS_TOKEN_KEY, function (err) {
            if (err) {
                return res.status(401).json({ message: "session expired" })
            }
            next()
        });
    }
    catch (err) {
        res.status(500).json({ message: "server error" })
    }

}
