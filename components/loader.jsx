function Loader () {

    return(
        <main className="w-full h-full flex justify-center items-center fixed inset-0 bg-black/90">
            <section className="flex gap-x-2 w-20 h-10">
                <div className="w-3 h-3 rounded-full bg-slate-300 border-2 border-gray-500 move"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300 border-2 border-gray-500 move"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300 border-2 border-gray-500 move"></div>
            </section>
        </main>
    )
}

export default Loader