"use client";

import { LanguageProvider } from "@/lib/LanguageContext";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
