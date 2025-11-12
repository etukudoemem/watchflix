import Image from "next/image"

export const Carousel = ({ movies }) => {

    return(
        <>
            <section className="w-full flex space-x-4 lg:space-x-7 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                {
                    movies?.map((movie) => 
                        <div key={movie.id} 
                            className="flex-shrink-0 w-40 h-55 sm:w-45 sm:h-60 lg:h-70 lg:w-50 border-0 border-gray-700 rounded-md relative
                                    snap-mandatory snap-end"
                        >
                            <Image 
                                className="w-full h-full rounded-md"
                                src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                                alt= "movie image"
                                width={500}
                                height={500}
                            />
                        </div>
                    )
                }
            </section>
        </>
    )
}