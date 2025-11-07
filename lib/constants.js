export const url = `https://api.themoviedb.org/3/movie/`

export const signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
export const signinUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_KEY}`
    }
}
