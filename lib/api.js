export const fetchMovies = async(url, options) => {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error("HTTP Error: Something went wrong")
        }
        const result = await response.json()
        return result.results
}

export const fetchMovieDetails = async(url, options) => {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error("HTTP Error: Something went wrong")
        }
        const result = await response.json()
        return result.results.find((i) => {
            if (i.type === "Trailer") {
                return i
            }
        })
}

export const createUser = async(url, newUser) => {
    const request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            newUser,
            {returnSecureToken: true}
        )
    })
    if (!request.ok) {
        throw new Error("HTTP Error: Something went wrong")
    }
    const response = await request.json()
    return response
}
export const logUserIn = async(url, user) => {
    const request = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            user,
            {returnSecureToken: true}
        )
    })
    if (!request.ok) {
        throw new Error("HTTP Error: Something went wrong")
    }
    const response = await request.json()
    return response
}