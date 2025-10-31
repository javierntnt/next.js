"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = {
  href: string;
  label: string;
};

export default function NavBar() {
  const path = usePathname();

  const links: LinkItem[] = [
    { href: "/", label: "Inicio" },
    { href: "/algo", label: "Algo" },
    { href: "/variables", label: "Variables" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}