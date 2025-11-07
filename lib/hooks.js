"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { fetchMovieDetails, fetchMovies, createUser, logUserIn } from "./api"
import { url, options, signupUrl, signinUrl } from "./constants"
import { useContext } from "react"
import { authContext } from "./AuthProvider"

export const useFetchTrendingMovies = () => {
    return useQuery({
        queryKey: ["movies", "trending"],
        queryFn: () => fetchMovies(url + `popular`, options)
    })
}

export const useFetchMovie = (id) => {
    return useQuery({
        queryKey: ["movie", "detailpage", id],
        queryFn: () => fetchMovieDetails(url + `${id}` + `/videos`, options)
    })
}

export const useFetchMovieType = (type) => {
    return useQuery({
        queryKey: ["movie", type],
        queryFn: () => fetchMovies(url + `/${type}` + "?language=en-US&page=1", options)
    })
}

export const useCreateUser = () => {
    const router = useRouter()
    const { setUserStatus, notification } = useContext(authContext)
    return useMutation({
        mutationFn: (newUser) => createUser(signupUrl, newUser),
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
        mutationFn: (user) => logUserIn(signinUrl, user),
        onSuccess: () => {
            setUserStatus(true)
            router.push("/")
        },
        onError: () => {
            notification()
        }
    })
}
