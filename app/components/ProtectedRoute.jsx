"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.replace("/access");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null; // or loading spinner

  return children;
}
