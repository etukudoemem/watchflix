"use client"

import { Carousel } from "./landing-page-carousel"
import { useFetchTrendingMovies } from "@/lib/hooks"

export const TrendingNow = () => {
    const {data: trendingMovies, isError, isPending, error} = useFetchTrendingMovies()

    return(
        <>
            <main className="w-full h-auto flex flex-col gap-y-5 justify-center items-center border-t-5 border-red-500 px-6 md:px-10 lg:px-30">
                <h3 className="w-full font-semibold self-start text-lg lg:text-2xl mt-10">
                    Trending Now
                </h3>
                {isPending && <section>
                    <span className="animate-pulse">Loading...</span>
                </section>}
                {isError && <section>
                    <span className="text-red-500">HTTP Error: {error.message} data</span>
                </section>}
                <section className="w-full flex justify-center items-center">
                    <Carousel movies={trendingMovies} />
                </section>
            </main>
        </>
    )
}