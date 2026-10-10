import ProfileUpdateForm from "@/components/profile/ProfileUpdateForm"
import ProfileUserDetails from "@/components/profile/ProfileUserDetails"


const ProfilePage = () => {
    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">

            <header>
                <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
                <p className="text-sm text-base-content/70">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </header>

            {/** user details card */}
            <ProfileUserDetails />

            {/** update user from section */}
            <ProfileUpdateForm />

        </div>
    )
}

export default ProfilePage