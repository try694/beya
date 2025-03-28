"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import connectDB from "../api/auths/db";
import { User, Member } from "@/models/User";
import { signIn } from "next-auth/react";
import mongoose from "mongoose";

// For error typing from NextAuth
interface CredentialsSignin extends Error {
  cause?: unknown;
}

const login = async (prevState: any, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    const someError = error as CredentialsSignin;
    if (someError.cause === 'CredentialSignIn') {
      return { error: "Invalid email or password. Please try again." };
    } else {
      return { error: "Invalid email or password. Please try again." };
    }
  }
  redirect("/dashboard");
};

export async function register(newUser: any): Promise<{ error?: string; success?: boolean }> {
  const { firstName, lastName, email, password, phone, country, metamask } = newUser;

  if (!firstName || !lastName || !email || !password || !phone || !country || !metamask) {
    return { error: "Please fill all fields" };
  }

  try {
    await connectDB();

    const existingUser = await User.findOne({ email });
    const existingMember = await Member.findOne({ email });

    if (existingUser || existingMember) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userId = new mongoose.Types.ObjectId();

    await User.create({
      _id: userId,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      country,
      metamask,
      whitelisted: false,
    });

    await Member.create({
      _id: userId,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      country,
      metamask,
    });

    return { success: true };
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Error registering user" };
  }
}
