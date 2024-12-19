import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center justify-center mt-20 mb-20 space-y-10">
      <h1 className="text-5xl text-gra-700 font-semibold cursor-pointer">Homepage</h1>
      <div>
        <Link href="/login">
          <button className="p-5 hover:bg-black bg-stone-700 text-white rounded-2xl ">
            Proceed to login
          </button>
        </Link>
      </div>

    </div >
  );
}
