import jwt from 'jsonwebtoken'

export function createAccessToken(data, exp) {
    return jwt.sign({ data }, process.env.ACCESS_TOKEN_KEY, { expiresIn: exp })
}
