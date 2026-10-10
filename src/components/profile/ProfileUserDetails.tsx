"use client"
import Loading from '@/app/loading';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ProfileUserDetails = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return <Loading />;
    }

    // handle sign out btn
    const handleSignOut = async () => {
        try {
            const { error } = await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/"); // redirect to login page
                    },
                },
            });

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
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-6 sm:flex-row sm:items-start">
            <span className="avatar avatar-placeholder">
                <span className="w-20 h-20 flex items-center justify-center rounded-full bg-primary-2 text-2xl text-primary-content">
                    {session?.user?.image ? (
                        <Image className='rounded-[50%]' src={session?.user?.image} width={40} height={40} alt='avatar' />
                    ) : (
                        <p className="text-4xl font-bold">{session?.user?.name?.charAt(0).toUpperCase()}</p>
                    )}
                </span>
            </span>
            <div className="min-w-0 flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
                <p className="truncate text-base-content/70">{session?.user?.email}</p>
            </div>
            <div>
                <button onClick={handleSignOut} type="button" className="btn btn-outline btn-error">↩︎ সাইন আউট</button>
            </div>
        </div>
    )
}

export default ProfileUserDetails