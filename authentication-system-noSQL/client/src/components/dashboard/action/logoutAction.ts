'use server'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
export default async function logoutAction() {
    const cookieStore = await cookies()
    cookieStore.delete("sessionid")
    redirect('/login')
}