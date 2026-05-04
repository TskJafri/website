import "./global.css";
import { ReactNode } from "react";
import CursorGradient from "../components/cursor/CursorGradient";

export const metadata = {
  title: `Taskeen Website Design`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CursorGradient />
        {children}
      </body>
    </html>
  );
}
