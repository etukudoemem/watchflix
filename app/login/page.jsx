"use client"

import { Button } from "@/components/button/login-button"
import { Input } from "@/components/input/input"
import { RememberHelp } from "@/components/remember-help-section"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useLogUserIn } from "@/lib/hooks"
import { Notify } from "@/components/notify"

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
}).required()

function Login () {
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})

    const mutation = useLogUserIn()
    
    const onSubmit = (data) => {
        mutation.mutate({
            email: data.email,
            password: data.password
        })
    }

    return(
        <>
            <main className="w-full h-[100vh] bgclass relative">
                <section className="w-full h-full flex flex-col gap-y-5 items-center justify-center">
                    <div className="px-6 sm:px-10 py-10 bg-black w-[95%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[24%] h-auto mx-auto space-y-6 rounded">
                        <h2 className="w-full font-semibold tracking-wider text-lg">
                            Sign In
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-y-4">
                                <Input register={register} error={errors.email?.message} label={"email"} placeholder={"Email"} />
                                <Input register={register} error={errors.password?.message} label={"password"} placeholder={"Password"} />
                                <Button isPending={mutation.isPending} />
                                <RememberHelp />
                            </div>
                        </form>
                        <Link href={"/signup"}>
                            <p className="text-[12px] text-gray-500 ">
                                Don't have an account? <span className="font-semibold text-white">Sign up Now</span>
                            </p>
                        </Link>
                    </div>
                    <Notify />      
                </section>
            </main>
        </>
    )
}

export default Login