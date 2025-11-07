"use client"

import { useFetchMovie } from "@/lib/hooks"
import { useParams } from "next/navigation"
import { Button } from "@/components/button/back-button"

function MovieDetails () {
    const params = useParams()
    const { id } = params

    const {data: movie, isPending, isError, error} = useFetchMovie(id)

    {
        isError && !isPending && 
        (<p className="px-6 w-full h-[100vh] flex flex-col items-center justify-center text-red-500 text-lg w-full">
            HTTP Error: Failed to fetch data.
        </p>)
    }

    {
        isPending && movie !== undefined && 
        (<p className="px-6 text-xl w-full h-[100vh] flex items-center justify-center text-white">
            Loading...
        </p>)
    }

    return(
        <>
            {movie && <main className="w-full flex flex-col ">
                <Button />
                <section key={movie.id} className="w-full h-[100vh] flex items-center justify-center relative">
                    <iframe 
                        width="90%" 
                        height="90%"
                        src={`https://www.youtube.com/embed/${movie.key}` }
                        title="trailer"
                        frameBorder="0"
                        allowFullScreen
                    >
                    </iframe>
                    <span className="w-full absolute bottom-2 flex justify-between items-center px-4">
                        <p>Publish Date: {(movie.published_at).slice(0, 10)}</p>
                        <p>{movie.type}</p>
                    </span>
                </section>
            </main>}
        </>
    )
}

export default MovieDetails