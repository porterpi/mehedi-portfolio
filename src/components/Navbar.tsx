"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="border-b bg-gray-100 dark:bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          My Portfolio
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
