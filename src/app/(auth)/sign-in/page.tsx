import SignInForm from '@/components/auth/SignInForm';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react'

export const metadata: Metadata = {
    title: "সাইন ইন | বাজার দর",
    description: "বাজার দর অ্যাকাউন্টে সাইন ইন করে বিস্তারিত দাম ও বাজার তুলনা দেখুন।",
};

const SignInPage = () => {
    return (
        <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 py-10">
            <header className="text-center">
                <h1 className="text-2xl font-bold">সাইন ইন</h1>
                <p className="mt-1 text-sm text-base-content/70">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </header>

            <div className="card border border-base-300 bg-base-100">
                <div className="card-body">
                    <SignInForm />
                </div>
            </div>

            <p className="text-center text-sm text-base-content/60">
                <Link className="link" href="/">← হোম পেজে ফিরে যান</Link>
            </p>
        </div>
    )
}

export default SignInPage