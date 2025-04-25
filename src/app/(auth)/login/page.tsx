"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Mail, Lock, AlertCircle, LockOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { GithubIcon, GoogleIcon } from "@/assets/icon/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

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
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with Google. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsGithubLoading(true);
    try {
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
      setError("Failed to sign in with GitHub. Please try again.");
      setIsGithubLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4 dark:from-slate-900 dark:to-slate-800'>
      <div className='w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700'>
        <Card className='border-none shadow-lg'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-xl'>Sign in</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <Button
                variant='outline'
                className='w-full'
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading}>
                {isGoogleLoading ? (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                ) : (
                  <GoogleIcon />
                )}
                Google
              </Button>
              <Button
                variant='outline'
                className='w-full'
                onClick={handleGithubSignIn}
                disabled={isGithubLoading}>
                {isGithubLoading ? (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                ) : (
                  <GithubIcon />
                )}
                GitHub
              </Button>
            </div>

            {error && (
              <Alert
                variant='destructive'
                className='animate-in fade-in-0 zoom-in-95 duration-300'>
                <AlertCircle className='h-4 w-4' />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-card px-2 text-muted-foreground'>
                  Or continue with
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
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
                <div className='flex items-center justify-between'>
                  <Label htmlFor='password'>Password</Label>
                  <Link
                    href='#'
                    className='text-xs text-primary hover:underline'>
                    Forgot password?
                  </Link>
                </div>
                <div className='relative'>
                  {isHidden ? (
                    <LockOpen
                      onClick={() => setIsHidden(!isHidden)}
                      className='absolute left-3 top-3 h-4 w-4 text-muted-foreground'
                    />
                  ) : (
                    <Lock
                      onClick={() => setIsHidden(!isHidden)}
                      className='absolute left-3 top-3 h-4 w-4 text-muted-foreground'
                    />
                  )}
                  <Input
                    id='password'
                    type={isHidden ? "text" : "password"}
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
              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                ) : null}
                Sign in with Email
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <div className='text-center text-sm'>
              Don&apos;t have an account?{" "}
              <Link href='/signup' className='text-primary hover:underline'>
                Create an account
              </Link>
            </div>
            <div className='text-center text-xs text-muted-foreground'>
              By continuing, you agree to our{" "}
              <Link
                href='#'
                className='underline underline-offset-4 hover:text-primary'>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href='#'
                className='underline underline-offset-4 hover:text-primary'>
                Privacy Policy
              </Link>
              .
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
