export const Reasons = () => {

    const reasons = [
        {
            id: "aaa",
            title: "Enjoy on your TV",
            text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        },
        {
            id: "bbb",
            title: "Download your shows to watch offline",
            text: "Save your favorites easily and always have something to watch."
        },
        {
            id: "ccc",
            title: "Watch everywhere",
            text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        },
        {
            id: "ddd",
            title: "Create profiles for kids",
            text: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
        }
    ]

    return(
        <>
            <h2 className="text-lg lg:text-2xl font-semibold mb-4 px-6 md:px-10 lg:px-30">
                More Reasons to Join
            </h2>
            <section className="w-full h-200 md:h-100 xl:h-80 grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-4 items-center 
                justify-center gap-y-2 gap-x-2 md:gap-4 px-6 md:px-10 lg:px-30">
                {
                    reasons.map((reason) => 
                        <div key={reason.id} 
                            className="w-full h-full bg-blue-900 flex flex-col flex-shringap-y-3 p-4 rounded-xl
                            more-gradient gridClass "
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