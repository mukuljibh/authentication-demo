'use client'

import logoutAction from "../action/logoutAction"
export default function LogoutButton() {
    return (
        <button
            onClick={logoutAction}
            className="border p-2 hover:bg-black hover:text-white bg-gray-400 font-semibold"
        >
            Logout
        </button>
    )
}