export const Reasons = () => {

    const reasons = [
        {
            title: "Enjoy on your TV",
            text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        },
        {
            title: "Download your shows to watch offline",
            text: "Save your favorites easily and always have something to watch."
        },
        {
            title: "Watch everywhere",
            text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        },
        {
            title: "Create profiles for kids",
            text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
        }
    ]

    return(
        <>
            <h2 className="text-lg lg:text-2xl font-semibold mb-4 px-6 md:px-10 lg:px-30">
                More Reasons to Join
            </h2>
            <section className="w-full flex flex-col flex-wrap md:flex-row items-center justify-center gap-y-2 gap-x-2 md:gap-x-4 px-6 md:px-10 lg:px-30">
                {
                    reasons.map((reason, index) => 
                        <div key={index} 
                            className="w-full md:max-w-[25%] lg:w-[24%] h-50 md:h-70 bg-blue-900 flex flex-col gap-y-3 p-4 rounded-xl
                            more-gradient"
                        >
                            <h4 className="text-lg lg:text-2xl font-semibold">
                                {reason.title}
                            </h4>
                            <p className="text-gray-400">
                                {reason.text}
                            </p>
                        </div>
                    )
                }
            </section>
        </>
    )
}