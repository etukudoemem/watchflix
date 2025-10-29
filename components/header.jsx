import { EmailInput } from "./emailInput"
import { GetStartedButton } from "./get-started-button"

export const Header = () => {

    return(
        <>
            <header className="w-full flex flex-col space-y-2 items-center justify-center">
                <h2 className="w-[80%] md:w-[60%] font-bold md:font-extrabold lg:font-black text-3xl md:text-4xl lg:text-5xl text-center tracking-wide leading-normal">
                    Unlimited movies, TV shows, and more
                </h2>
                <p className="md:font-semibold text-sm md:text-lg mb-4">Starts at N2,500. Cancel anytime.</p>
                <p className="w-[85%] md:w-[75%] text-sm md:text-base text-center mt-2">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <section className="w-full flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-2 mt-2">
                    <EmailInput />
                    <GetStartedButton />
                </section>
            </header>
        </>
    )
}