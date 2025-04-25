"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginInput = z.infer<typeof loginSchema>;

const MOCK_USER = {
  id: "1",
  email: "admin@example.com",
  password: "password123",
  name: "Admin User",
  role: "admin",
};

export async function signIn(data: LoginInput) {
  const result = loginSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: "Invalid input" };
  }

  if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
    const session = {
      user: {
        id: MOCK_USER.id,
        email: MOCK_USER.email,
        name: MOCK_USER.name,
        role: MOCK_USER.role,
      },
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week
    };

    cookies().set("session", JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return { success: true };
  }

  return { success: false, error: "Invalid email or password" };
}

export async function signOut() {
  cookies().delete("session");
  redirect("/");
}

export async function getSession() {
  const sessionCookie = cookies().get("session");

  if (!sessionCookie) {
    return null;
  }

  try {
    return JSON.parse(sessionCookie.value);
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return session;
}
