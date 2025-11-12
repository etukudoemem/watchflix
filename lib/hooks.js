"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { fetchMovieDetails, fetchMovies, createUser, logUserIn } from "./api"
import { options } from "./constants"
import { useContext } from "react"
import { authContext } from "./AuthProvider"

export const useFetchTrendingMovies = () => {
    return useQuery({
        queryKey: ["movies", "trending"],
        queryFn: () => fetchMovies(process.env.NEXT_PUBLIC_URL + `popular`, options)
    })
}

export const useFetchMovie = (id) => {
    return useQuery({
        queryKey: ["movie", "detailpage", id],
        queryFn: () => fetchMovieDetails(process.env.NEXT_PUBLIC_URL + `${id}` + `/videos`, options)
    })
}

export const useFetchMovieType = (type) => {
    return useQuery({
        queryKey: ["movie", type],
        queryFn: () => fetchMovies(process.env.NEXT_PUBLIC_URL + `/${type}` + "?language=en-US&page=1", options)
    })
}

export const useCreateUser = () => {
    const router = useRouter()
    const { setUserStatus, notification } = useContext(authContext)
    return useMutation({
        mutationFn: (newUser) => createUser(process.env.NEXT_PUBLIC_SIGNUP_URL, newUser),
        onSuccess: () => {
            setUserStatus(true)
            router.push("/")
        },
        onError: () => {
            notification()
        }
    })
}

export const useLogUserIn = () => {
    const router = useRouter()
    const { setUserStatus, notification } = useContext(authContext)
    return useMutation({
        mutationFn: (user) => logUserIn(process.env.NEXT_PUBLIC_SIGNIN_URL, user),
        onSuccess: () => {
            setUserStatus(true)
            router.push("/")
        },
        onError: () => {
            notification()
        }
    })
}
