"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // This effect runs on route change
  useEffect(() => {
    setIsLoading(true);

    // Simulate completion after a short delay
    // In real apps, this would be tied to actual content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className='fixed top-0 left-0 right-0 z-50 pointer-events-none'>
      <motion.div
        className='h-1 bg-blue-500'
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
}
