import Link from "next/link"

export const Nav = () => {

    return(
        <>
            <section className="w-full flex items-center justify-between gap-x-3 p-6 md:px-10 lg:px-30">
                <h2 className="text-lg text-red-500 font-semibold">
                    WATCHFLIX
                </h2>
                <button className="flex items-center w-auto h-8 py-2 px-4 bg-red-500 text-white text-sm rounded-sm font-bold outline-none">
                    <Link href={"/login"}>Sign In</Link>
                </button>
            </section>
        </>
    )
}