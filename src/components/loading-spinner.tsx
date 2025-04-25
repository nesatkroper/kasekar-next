"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // This effect runs on route change
  useEffect(() => {
    setIsLoading(true);

    // Simulate completion after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50'>
      <div className='bg-white p-4 rounded-lg shadow-lg flex items-center gap-3'>
        <div className='h-5 w-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin' />
        <span>Loading...</span>
      </div>
    </div>
  );
}
