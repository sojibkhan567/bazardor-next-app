import { z } from "zod";

// Sign-in validation
export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "সঠিক ইমেইল ঠিকানা দিন।")
    .email("সঠিক ইমেইল ঠিকানা দিন।"),

  password: z
    .string()
    .min(1, "সঠিক পাসওয়ার্ড দিন।")
    .min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।"),
});

// Sign-up validation
export const signUpSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "নাম অবশ্যই দিতে হবে")
      .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে।"),

    email: z
      .string()
      .trim()
      .min(1, "সঠিক ইমেইল ঠিকানা দিন।")
      .email("সঠিক ইমেইল ঠিকানা দিন।"),

    password: z
      .string()
      .min(1, "সঠিক পাসওয়ার্ড দিন।")
      .min(8, "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।"),

    confirmPassword: z.string().min(1, "দুটি পাসওয়ার্ড মিলছে না।"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "দুটি পাসওয়ার্ড মিলছে না।",
    path: ["confirmPassword"],
  });

// profile update from validation
export const profileUpdateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "নাম অবশ্যই দিতে হবে")
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে")
    .max(100, "নাম সর্বোচ্চ ১০০ অক্ষরের হতে পারবে"),
});

export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
export type ProfileUpdateFormData = z.infer<typeof profileUpdateSchema>;
