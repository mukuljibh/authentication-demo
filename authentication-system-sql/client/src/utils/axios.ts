import axios from "axios";

const networkCall = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export const internalNetworkCall = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});


export default networkCall