"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileUpdateFormData, profileUpdateSchema } from "@/lib/validations/auth.schema";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const ProfileUpdateForm = () => {

    const { data: session } = authClient.useSession();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ProfileUpdateFormData>({
        resolver: zodResolver(profileUpdateSchema),
        values: {
            name: session?.user.name || "",
        },
    });

    // update user profile name
    const onSubmit = async (data: ProfileUpdateFormData) => {
        // Send update data to your API.
        try {
            const { data: user, error } = await authClient.updateUser({
                name: data.name,
            })

            if (error) {
                toast.error(error.message || "Sign up failed");
                return;
            }

            if (user) {
                toast.success("নাম সফলভাবে হালনাগাদ হয়েছে।");
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <h3 className="mb-3 text-lg font-semibold">নাম হালনাগাদ করুন</h3>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3">
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

                <button type="submit" className={`btn sm:w-fit ${isSubmitting ? "bg-gray-300 text-gray-500" : "btn-primary-2"}`} >
                    {isSubmitting && (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    )}
                    নাম হালনাগাদ করুন
                </button>

            </form>

        </div>
    )
}

export default ProfileUpdateForm