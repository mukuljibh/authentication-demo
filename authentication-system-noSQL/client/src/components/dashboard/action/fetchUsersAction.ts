'use server'
import networkCall from "@/utils/axios";
import { cookies } from "next/headers";
type apiResponse = {
    _id: string,
    name: string,
    username: string,
    email: string,
    address: string,
    createdAt: string,
}

type userProps = {
    users: apiResponse[]
}
export default async function fetchUsersAction() {
    const cookiestore = await cookies()
    const cookie = cookiestore.get('sessionid')
    try {
        const res = await networkCall.get<userProps>('/profile', {
            headers: {
                Cookie: `${cookie?.name}=${cookie?.value}` || '',
            },
        })
        return res.data.users
    }
    catch (err) {
        const error = err as { response?: { data?: { message: string } } }
        console.log(error.response?.data?.message)
        return []
    }
}
