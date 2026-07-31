"use client";

import Navbar from "./Navbar";

export default function ClientShell({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
