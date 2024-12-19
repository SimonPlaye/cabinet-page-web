"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-2">
          <Link href="/" className="text-primary hover:underline">
            Accueil
          </Link>
          <Link
            href="/poles-de-competences"
            className="text-primary hover:underline"
          >
            Nos pôles de compétences
          </Link>
          <Link href="/collaborateurs" className="text-primary hover:underline">
            Nos collaborateurs
          </Link>
          <Link href="/contact" className="text-primary hover:underline">
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
}
