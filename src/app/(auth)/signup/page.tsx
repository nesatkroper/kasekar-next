"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Loader2,
  Mail,
  Lock,
  User,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Note: Password hashing should be done on the server, not in the client
      // We're sending the plain password to the API, which should hash it
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create account");
      }

      // Redirect to login page on success
      router.push("/login");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 dark:from-slate-900 dark:to-slate-800'>
      <div className='w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700'>
        <Card className='border-none shadow-lg'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-xl'>Sign up</CardTitle>
            <CardDescription>
              Fill out the form below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {error && (
              <Alert
                variant='destructive'
                className='animate-in fade-in-0 zoom-in-95 duration-300'>
                <AlertCircle className='h-4 w-4' />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Full Name</Label>
                <div className='relative'>
                  <User className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='name'
                    placeholder='John Doe'
                    className='pl-10'
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <p className='text-xs text-destructive'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <div className='relative'>
                  <Mail className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='email'
                    type='email'
                    placeholder='name@example.com'
                    className='pl-10'
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <p className='text-xs text-destructive'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='password'
                    type='password'
                    placeholder='••••••••'
                    className='pl-10'
                    {...register("password")}
                  />
                </div>
                {errors.password && (
                  <p className='text-xs text-destructive'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <div className='relative'>
                  <Lock className='absolute left-3 top-3 h-4 w-4 text-muted-foreground' />
                  <Input
                    id='confirmPassword'
                    type='password'
                    placeholder='••••••••'
                    className='pl-10'
                    {...register("confirmPassword")}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className='text-xs text-destructive'>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                ) : null}
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <div className='text-center text-sm'>
              Already have an account?{" "}
              <Link href='/login' className='text-primary hover:underline'>
                Sign in
              </Link>
            </div>
            <div className='text-center text-xs text-muted-foreground'>
              By creating an account, you agree to our{" "}
              <a
                href='#'
                className='underline underline-offset-4 hover:text-primary'>
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href='#'
                className='underline underline-offset-4 hover:text-primary'>
                Privacy Policy
              </a>
              .
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
