"use client";

import { useEffect, useState } from "react";
import { LoginForm } from "@/components/login-form";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_40%)]'></div>
        <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/30 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-400/30 dark:bg-violet-900/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2'></div>
      </div>
      <LoginForm />
    </div>
  );
}
