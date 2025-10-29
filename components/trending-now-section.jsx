import { Carousel } from "./landing-page-carousel"

export const TrendingNow = () => {

    return(
        <>
            <main className="w-full h-auto flex flex-col gap-y-5 justify-center items-center border-t-5 border-red-500 px-6 md:px-10 lg:px-30">
                <h3 className="w-full font-semibold self-start lg:text-2xl mt-10">
                    Trending Now
                </h3>
                <section className="w-full flex justify-center items-center">
                    <Carousel />
                </section>

            </main>
        </>
    )
}

// border-t-5 border-red-500 trending-gradient