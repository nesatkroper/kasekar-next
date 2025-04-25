import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { images } from "@/constant/image";
import Image from "next/image";
import Link from "next/link";
import { AppleIcon, GoogleIcon, MetaIcon } from "@/assets/icon/icon";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Link href='/login' className='cursor-pointer'>
        test
      </Link>
      <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2 max-w-[1000px] min-w-[500px] '>
          <form className='p-6 md:p-8 w-[400px]'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl font-bold'>Welcome back</h1>
                <p className='text-muted-foreground text-balance'>
                  Login to your Acme Inc account
                </p>
              </div>
              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <a
                    href='#'
                    className='ml-auto text-sm underline-offset-2 hover:underline'>
                    Forgot your password?
                  </a>
                </div>
                <Input id='password' type='password' required />
              </div>
              <Button type='submit' className='w-full'>
                Login
              </Button>
              <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
                <span className='bg-card text-muted-foreground relative z-10 px-2'>
                  Or continue with
                </span>
              </div>
              <div className='grid grid-cols-3 gap-4'>
                <Button variant='outline' type='button' className='w-full'>
                  <AppleIcon />
                  <span className='sr-only'>Login with Apple</span>
                </Button>
                <Button variant='outline' type='button' className='w-full'>
                  <GoogleIcon />
                  <span className='sr-only'>Login with Google</span>
                </Button>
                <Button variant='outline' type='button' className='w-full'>
                  <MetaIcon />
                  <span className='sr-only'>Login with Meta</span>
                </Button>
              </div>
              <div className='text-center text-sm'>
                Don&apos;t have an account?{" "}
                <a href='#' className='underline underline-offset-4'>
                  Sign up
                </a>
              </div>
            </div>
          </form>
          <div className='bg-muted relative hidden md:block'>
            <Image
              src={images}
              alt='Image'
              width={500}
              height={500}
              className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
            />
          </div>
        </CardContent>
      </Card>
      <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>
        and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
