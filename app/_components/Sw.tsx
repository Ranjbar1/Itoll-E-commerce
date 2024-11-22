"use client";
import React, { useEffect } from "react";

export default function SW({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);
  return <>{children}</>;
}
