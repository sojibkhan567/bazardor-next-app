"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';

const UserInfo = () => {
    const pathname = usePathname();

    const { data: session, isPending } = authClient.useSession();

    // handle sign out btn
    const handleSignOut = async () => {
        try {
            const { error } = await authClient.signOut();

            if (error) {
                toast.error("Failed to sign out. Please try again.");
                return;
            }

            toast.success("সফলভাবে সাইন আউট হয়েছে।");
        } catch {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className='ms-auto flex items-center gap-3'>

            {isPending ? (
                <span className="h-6 w-6 animate-spin rounded-full border-3 border-white/30 border-t-green-600" />
            ) : session?.user ? (
                <div className='flex items-center gap-2'>
                    <span className="avatar avatar-placeholder">
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-2 text-primary-content sm:w-9">
                            {session?.user?.image ? (
                                <Image className='rounded-[50%]' src={session?.user?.image} width={40} height={40} alt='avatar' />
                            ) : (
                                <p className="text-sm font-bold">{session.user.name?.charAt(0).toUpperCase()}</p>
                            )}
                        </span>
                    </span>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm gap-2 sm:btn-md">

                            <span className="hidden max-w-32 truncate text-sm font-medium sm:inline">{session.user?.name}</span>
                            <span aria-hidden="true" className="text-xs opacity-60">▾</span>
                        </div>
                        <ul tabIndex={-1} className="menu dropdown-content z-50 mt-2 w-64 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg">
                            <li className="menu-title">
                                <span className="block truncate">{session.user?.name}</span>
                                <span className="block truncate text-xs font-normal opacity-70">{session.user?.email}</span>
                            </li>
                            <li>
                                <Link href="/profile">👤 আমার প্রোফাইল</Link>
                            </li>
                            <li>
                                <button onClick={handleSignOut} type="button" className="text-error">↩︎ সাইন আউট</button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <>
                    <Link href={"/sign-in"} className={`btn ${pathname === "/sign-in" ? "btn-primary-2" : "btn-ghost"}`}>সাইন ইন</Link>
                    <Link href={"/sign-up"} className={`btn ${pathname === "/sign-up" ? "btn-primary-2" : "btn-ghost"}`}>সাইন আপ</Link>
                </>
            )}
        </div>
    )
}

export default UserInfo