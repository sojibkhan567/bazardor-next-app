"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpFormData, } from "@/lib/validations/auth.schema";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLoginBtn from "./SocialLoginBtn";

export default function SignUpForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    // user sign up with email & password
    const onSubmit = async (data: SignUpFormData) => {
        // Send registration data to your API.
        try {
            const { data: user, error } = await authClient.signUp.email({
                name: data.name,
                email: data.email,
                password: data.password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(error.message || "Sign up failed");
                router.push("/");
                router.refresh();
            }

            if (user) {
                toast.success("অ্যাকাউন্ট তৈরি হয়েছে! স্বাগতম।");
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <label className="form-control w-full">
                <span className="label-text mb-1 block font-medium">নাম</span>
                <input
                    id="name"
                    type="name"
                    {...register("name")}
                    className={`input input-bordered w-full outline-none ${errors.name ? "input-error" : " "} `}
                    placeholder="যেমন: রহিম উদ্দিন"
                />
                {errors.name && (
                    <span className="mt-1 text-xs text-error">{errors.name.message}</span>
                )}
            </label>

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

            <label className="form-control w-full">
                <span className="label-text mb-1 block font-medium">পাসওয়ার্ড নিশ্চিত করুন</span>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    className={`input input-bordered w-full outline-none ${errors.confirmPassword ? "input-error" : " "} `}
                    autoComplete="new-password"
                    placeholder="আবার লিখুন"
                />
                {errors.confirmPassword && (
                    <span className="mt-1 text-xs text-error">{errors.confirmPassword.message}</span>
                )}
            </label>

            <button type="submit" className={`btn w-full ${isSubmitting ? "bg-gray-300 text-gray-500" : "btn-primary-2"}`} >
                {isSubmitting && (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                )}
                অ্যাকাউন্ট তৈরি করুন
            </button>

            <div className="divider my-0 text-xs">অথবা</div>
            {/** socila sign up btn */}
            <SocialLoginBtn />

            <p className="text-center text-sm text-base-content/70">
                অ্যাকাউন্ট আছে? {" "}
                <Link className="link text-primary-2" href="/sign-in">সাইন ইন করুন</Link>
            </p>
        </form>
    );
}