"use client"

import { useFetchMovieType } from "@/lib/hooks"
import Image from "next/image"
import Link from "next/link"

export const Carousel = ({ type }) => {
    const {data: trending} = useFetchMovieType("popular")
    const {data: nowplaying} = useFetchMovieType("now_playing")
    const {data: upcoming} = useFetchMovieType("upcoming")
    const {data: toprated} = useFetchMovieType("top_rated")

    return(
        <>
            <section className="w-full flex space-x-5 lg:space-x-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                {
                    type === "popular" && trending ? trending.map((movie) => 
                        <div key={movie.id} 
                            className="flex-shrink-0 w-30 md:w-35 h-40 md:h-45 lg:h-55 lg:w-42 border-1 border-gray-700 rounded-md relative
                                snap-mandatory snap-end"
                        >
                            <Link href={`/movies/${movie.id}`}>
                                <Image 
                                    className="w-full h-full rounded-md"
                                    src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                                    alt="movie image"
                                    width={500}
                                    height={500}
                                />
                            </Link>
                        </div>
                    ) :
                    type === "now_playing" && nowplaying ? nowplaying.map((movie) => 
                        <div key={movie.id} 
                            className="flex-shrink-0 w-30 md:w-35 h-40 md:h-45 lg:h-55 lg:w-42 border-1 border-gray-700 rounded-md relative
                                snap-mandatory snap-end"
                        >
                            <Link href={`/movies/${movie.id}`}>
                                <Image 
                                    className="w-full h-full rounded-md"
                                    src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                                    alt="movie image"
                                    width={500}
                                    height={500}
                                />
                            </Link>
                        </div>
                    ) :
                    type === "top_rated" && toprated ? toprated.map((movie) => 
                        <div key={movie.id} 
                            className="flex-shrink-0 w-30 md:w-35 h-40 md:h-45 lg:h-55 lg:w-42 border-1 border-gray-700 rounded-md relative
                                snap-mandatory snap-end"
                        >
                            <Link href={`/movies/${movie.id}`}>
                                <Image 
                                    className="w-full h-full rounded-md"
                                    src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                                    alt="movie image"
                                    width={500}
                                    height={500}
                                />
                            </Link>
                        </div>
                    ) :
                    type === "upcoming" && upcoming && upcoming.map((movie) => 
                        <div key={movie.id} 
                            className="flex-shrink-0 w-30 md:w-35 h-40 md:h-45 lg:h-55 lg:w-42 border-1 border-gray-700 rounded-md relative
                                snap-mandatory snap-end"
                        >
                            <Link href={`/movies/${movie.id}`}>
                                <Image 
                                    className="w-full h-full rounded-md"
                                    src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                                    alt="movie image"
                                    width={500}
                                    height={500}
                                />
                            </Link>
                        </div>
                    )
                }
            </section>
        </>
    )
}