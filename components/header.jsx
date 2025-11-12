import { Input } from "./input"
import { Button } from "./button"
import { FaChevronRight } from "react-icons/fa"

export const Header = () => {
    
    return(
        <>
            <header className="w-full flex flex-col space-y-2 items-center justify-center">
                <h2 className="w-[80%] md:w-[60%] font-bold md:font-extrabold lg:font-black 
                    text-3xl md:text-4xl lg:text-5xl text-center tracking-wide leading-normal">
                    Unlimited movies, TV shows, and more
                </h2>
                <p className="md:font-semibold text-sm md:text-lg mb-4">Starts at N2,500. Cancel anytime.</p>
                <p className="w-[85%] md:w-[75%] text-sm md:text-base text-center mt-2">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <section className="w-full md:w-[65%] flex flex-col md:flex-row items-center gap-y-2 gap-x-2 mt-2">
                    <Input page={"landing"} placeholder={"Email address"} label={"email"} />
                    <Button style={`w-40 md:w-50 h-13 bg-red-500 flex space-x-2 justify-center items-center 
                        font-semibold tracking-wider rounded mt-2 md:mt-0`}
                        type={"button"} button={"getStarted"}
                    >
                        <p>Get Started</p>
                        <FaChevronRight />
                    </Button>
                </section>
            </header>
        </>
    )
}