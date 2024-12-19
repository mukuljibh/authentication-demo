import { NextRequest, NextResponse } from "next/server";
import networkCall from "@/utils/axios";


//this api route act as proxy for handling the cross domain cookies
export async function POST(req: NextRequest) {
    try {
        const res = await networkCall.post("/login", await req.json())

        const cookieHeader = res.headers["set-cookie"]
        const response = NextResponse.json({ message: res.data.message }, { status: res.status })
        if (cookieHeader) {
            response.headers.set('set-cookie', cookieHeader[0]);
        }
        return response

    }
    catch (err) {
        const error = err as { status: number, response?: { data?: { message: string, status: number } } }
        return NextResponse.json({ message: error.response?.data?.message }, { status: error.status });
    }

}