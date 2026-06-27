import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

export const metadata: Metadata = {
  title: "SafetyMap Intelligence",
  description: "Source-backed safety intelligence dashboard prototype."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
