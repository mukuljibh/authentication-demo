import Link from "next/link"
import Image from "next/image"
function Navbar() {

    return (
        <header className="sticky top-0 py-5 bg-white shadow-md px-5">
            <nav className="flex justify-between items-center ">
                <Link href="/">
                    <Image
                        className="lg:-12 lg:pl-12 h-8" src="/brandLogo.avif"
                        width={200}
                        height={200}
                        alt="logo"
                    />
                </Link>
                <ul className="lg:flex gap-10 items-center text-sm font-medium hidden">
                    <li className="cursor-pointer">NEW ARRIVALS</li>
                    <li className="cursor-pointer">BRANDS</li>
                    <li className="cursor-pointer">MAKEUP</li>
                    <li className="cursor-pointer">SKIN</li>
                    <li className="cursor-pointer">HAIR</li>
                    <li className="cursor-pointer">FRAGRANCE</li>
                    <li className="cursor-pointer">COMBOS</li>
                </ul>
                <div className="flex gap-6 items-center ">
                    <Image
                        width={30}
                        height={40}
                        alt="logo"
                        className="h-6" src="/like.png" />
                    <Image
                        className="h-6"
                        width={30}
                        height={40}
                        alt="logo"
                        src="/cart.webp" />
                    <button className="hover:bg-black p-2 rounded-lg border-2 border-black hover:text-white" >login</button>
                </div>
            </nav>
        </header >
    )
}
export default Navbar