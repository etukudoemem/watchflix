export const Input = ({ label, placeholder, register, error }) => {
    
    return(
        <div className="w-full">
            <input 
                className={`outline-none bg-[#444] w-full h-12 sm:h-10 rounded p-3 placeholder-gray-400 
                    text-xs font-semibold relative ${error && "border-2 border-red-500"}`}
                type={label}
                placeholder={placeholder}
                {...register(label, {min: 6})}
            />
            <span className="text-[14px] text-red-500 font-semibold">{error}</span>
        </div>
    )
}