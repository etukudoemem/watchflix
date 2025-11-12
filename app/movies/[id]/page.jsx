"use client"

import { useFetchMovie } from "@/lib/hooks"
import { useParams } from "next/navigation"
import { Button } from "@/components/button"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import Loader from "@/components/loader"

function MovieDetails () {
    const params = useParams()
    const { id } = params

    const {data: movie, isPending, isError} = useFetchMovie(id)

    if (isError && !isPending) {
        return <span className="w-full h-[100vh] flex flex-col items-center justify-center text-red-500 text-xl w-full">
            HTTP Error: Failed to fetch movie
        </span>
    }
    
    if (isPending) {
        return <span className="w-full h-[100vh] flex items-center justify-center text-white">
            <Loader/>
        </span>
    }

    return(
        <>
            {movie && <main className="w-full flex flex-col ">
                <Button style={"flex items-center gap-x-2 cursor-pointer p-4"} type={"button"} button={"back"} >
                    <IoArrowBackCircleOutline size={30} />
                </Button>
                <section key={movie.id} className="w-full h-[100vh] flex items-center justify-center relative">
                    <iframe 
                        width="90%" 
                        height="95%"
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