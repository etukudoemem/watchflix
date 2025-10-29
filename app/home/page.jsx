export const Home = () => {

    return(
        <>
            <main>
                <section className="w-full min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-semibold">Welcome to watchflix!</h1>
                </section>
                <section className="pb-5">
                    <Carousel />
                </section>
            </main>
        </>
    )
}