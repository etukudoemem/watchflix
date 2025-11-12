import { Carousel } from "@/components/movies-page-carousel"
import { Button } from "@/components/button"
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { FaPlay } from "react-icons/fa"
import { HiOutlineExclamationCircle } from "react-icons/hi"

const Movies = () => {
    const styleOne = `w-[max-content] h-8 px-4 flex items-center gap-x-1 bg-white font-semibold text-[#222] text-xs rounded-sm`
    const styleTwo = `w-[max-content] h-8 px-4 flex items-center gap-x-1 bg-gray-400/70 font-semibold text-[#222] text-xs rounded-sm`
    
    return(
        <>
            <main className="w-full pb-4">
                <div className="w-full h-auto flex flex-col space-y-4">
                    <section className="w-full h-[70vh] md:h-[100vh] md:relative bg-[url('/homeImage.jpg')] bg-cover bg-no-repeat border-b-1 border-gray-500">
                        <Button style={"flex items-center gap-x-2 cursor-pointer p-4"} type={"button"} button={"back"} >
                            <IoArrowBackCircleOutline size={30} />
                        </Button>
                        <div className="w-full h-full space-y-4 translate-y-70 sm:translate-y-55 md:translate-y-35 px-6 md:px-10 ">
                            <h1 className="text-3xl md:text-6xl font-bold">
                                THE PROTECTOR
                            </h1>
                            <p className="w-full md:w-1/3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cupiditate nostrum nisi reiciendis eos, commodi voluptatem 
                                voluptatum velit maiores nobis vero assumenda laborum.
                            </p>
                            <div className="flex items-center gap-x-2">
                                <Button style={styleOne} type={"button"}>
                                    <FaPlay />
                                    <p className="translate-y-[1.5px] translate-x-[-4px]">
                                        Play
                                    </p>
                                </Button>
                                <Button style={styleTwo} type={"button"}>
                                    <HiOutlineExclamationCircle size={19} />
                                    <p className="translate-y-[1.5px] translate-x-[-4px]">
                                        More Info
                                    </p>
                                </Button>
                            </div>
                        </div>
                    </section>
                    <section className="md:absolute md:bottom-0 z-10 w-full px-6 md:px-10 ">
                        <h2 className="font-semibold py-1 ">
                            Popular on Watchflix
                        </h2>
                        <Carousel type={"popular"} />
                    </section>
                    <section className="px-6 md:px-10 ">
                        <h2 className="font-semibold py-1">
                            Now Playing on Watchflix
                        </h2>
                        <Carousel type={"now_playing"}/>
                    </section>
                    <section className="px-6 md:px-10 ">
                        <h2 className="font-semibold py-1">
                            Top Rated on Watchflix
                        </h2>
                        <Carousel type={"top_rated"}/>
                    </section>
                    <section className="px-6 md:px-10 ">
                        <h2 className="font-semibold py-1">
                            Upcoming on Watchflix
                        </h2>
                        <Carousel type={"upcoming"}/>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Movies