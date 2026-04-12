"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";
import { useAuthStore } from "../store/authStore";

export default function ClientShell({ children }) {
  const { initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
