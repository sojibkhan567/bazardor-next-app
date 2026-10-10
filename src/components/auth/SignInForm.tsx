
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    signInSchema,
    type SignInFormData,
} from "@/lib/validations/auth.schema";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useState } from "react";
import SocialLoginBtn from "./SocialLoginBtn";

export default function SignInForm() {
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // user sign-in by email or password
    const onSubmit = async (data: SignInFormData) => {
        // Call your authentication API here.
        try {
            const { data: user, error } = await authClient.signIn.email({
                email: data.email,
                password: data.password,
                callbackURL: "/",
            });

            if (error) {
                toast.error("ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।");
                setError(true)
                return;
            }

            if (user) {
                toast.success("সফলভাবে সাইন ইন হয়েছে।");
            }
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            {error && (
                <div role="alert" className="alert alert-error text-sm">
                    <span aria-hidden="true">⚠️</span>
                    <span>ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।</span>
                </div>
            )}

            <label className="form-control w-full">
                <span className="label-text mb-1 block font-medium">ইমেইল</span>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={`input input-bordered w-full outline-none ${errors.email ? "input-error" : " "} `}
                    autoComplete="email"
                    placeholder="you@example.com"
                />
                {errors.email && (
                    <span className="mt-1 text-xs text-error">{errors.email.message}</span>
                )}
            </label>

            <label className="form-control w-full">
                <span className="label-text mb-1 block font-medium">পাসওয়ার্ড</span>
                <input
                    id="password"
                    type="password"
                    {...register("password")}
                    className={`input input-bordered w-full outline-none ${errors.password ? "input-error" : " "} `}
                    autoComplete="password"
                    placeholder="কমপক্ষে ৮ অক্ষর"
                />
                {errors.password && (
                    <span className="mt-1 text-xs text-error">{errors.password.message}</span>
                )}
            </label>

            <button type="submit" className={`btn w-full ${isSubmitting ? "bg-gray-300 text-gray-500" : "btn-primary-2"}`} >
                {isSubmitting && (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                )}
                সাইন ইন
            </button>

            {/** social login btn */}
            <div className="divider my-0 text-xs">অথবা</div>
            <SocialLoginBtn />

            <p className="text-center text-sm text-base-content/70">অ্যাকাউন্ট নেই?{" "}
                <Link className="link text-primary-2" href="/sign-up">সাইন আপ করুন</Link>
            </p>
        </form>
    );
}