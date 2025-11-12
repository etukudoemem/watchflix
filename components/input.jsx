export const Input = ({ label, placeholder, register, error, page }) => {

    const styleOne = `w-[90%] md:w-full h-13 border-1 border-gray-500 py-3 px-3 rounded placeholder-gray-300`
    const styleTwo = `bg-[#444] w-full h-12 sm:h-10 rounded p-3 placeholder-gray-400 text-xs font-semibold relative`
    
    return(
        <div className="w-full flex flex-col items-center">
            <input 
                className={`${page === "landing" ? styleOne : styleTwo} ${error && "border-2 border-red-500"} outline-none`}
                type={label}
                placeholder={placeholder}
                {...register && {...register(label, {min: 6})}}
            />
            <span className="text-[14px] text-red-500 font-semibold self-start">{error}</span>
        </div>
    )
}