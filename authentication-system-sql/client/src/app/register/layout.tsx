import Link from "next/link";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center mt-20 mb-20 ">
            <div className="space-y-12 ">
                <h1 className="lg:text-3xl text-xl text-center font-bold">SIGN UP </h1>
                <div className="flex lg:gap-72 gap-32 justify-center font-medium border-b-2 lg:pl-16 lg:pr-16 px-4 pb-5">
                    <Link href="/login">ALREADY REGISTERED?</Link>
                    <h1 className="cursor-pointer">NEW TO HOKMAKEUP?</h1>
                </div>
                <div className="flex justify-center">
                    {children}
                </div>
            </div>
        </div >
    );
}
