import prisma from "../../db/prismaDb.js"
export async function profileController(req, res) {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                username: true,
                address: true,
                email: true,
                createdAt: true
            }
        })

        res.status(200).json({ message: "All profile send from the database", users })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "server error" })

    }
}