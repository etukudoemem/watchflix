export const Carousel = () => {
    // Placeholder movie names until actual movies are fetched from api
    const trending = ["Farmer's Bride", "THINLINE", "The Waiter", "BEAUTY IN BLACK", "TO KILL A MONKEY",
        "SPARTACUS", "NERO THE ASSASIN", "BON APPETIT", "MONDAY", "ELIXIR"
    ]


    return(
        <>
            <section className="w-full flex space-x-2 lg:space-x-10 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                {
                    trending.map((title, index) => 
                        <div key={index} 
                            className="flex-shrink-0 w-[40%] md:w-[18%] lg:w-[15%] h-45 md:h-55 lg:h-65 border-2 border-gray-700 rounded-md"
                        >
                            {title}
                        </div>
                    )
                }
            </section>
        </>
    )
}