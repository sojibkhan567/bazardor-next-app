import SignUpForm from '@/components/auth/SignUpForm';
import { Metadata } from 'next';
import Link from 'next/link'

export const metadata: Metadata = {
    title: "সাইন আপ | বাজার দর",
    description: "বাজার দর অ্যাকাউন্টে সাইন ইন করে বিস্তারিত দাম ও বাজার তুলনা দেখুন।",
};

const SignUpPage = () => {
    return (
        <div className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 py-10">
            <header className="text-center">
                <h1 className="text-2xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
                <p className="mt-1 text-sm text-base-content/70">বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            </header>

            <div className="card border border-base-300 bg-base-100">
                <div className="card-body">
                    <SignUpForm />
                </div>
            </div>

            <p className="text-center text-sm text-base-content/60">
                <Link className="link" href="/">← হোম পেজে ফিরে যান</Link>
            </p>
        </div>
    )
}

export default SignUpPage