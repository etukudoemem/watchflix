export const Button = ({ isPending }) => {

    return(
        <button
            type="submit"
            className={`w-full h-12 sm:h-10 rounded text-sm font-semibold ${isPending ? "opacity-70 bg-red-500" : "bg-red-500"}`}
        >
            {isPending ? "Signing In..." : "Sign In"}
        </button>
    )
}