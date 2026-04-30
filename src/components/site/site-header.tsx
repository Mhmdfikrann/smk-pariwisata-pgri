import Link from "next/link";
import { GraduationCap } from "lucide-react";

import { CtaLink } from "@/components/site/cta-link";
import { MobileNav } from "@/components/site/mobile-nav";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="min-w-0 text-sm font-semibold leading-tight text-foreground sm:text-base">
            SMK Pariwisata PGRI
            <span className="block text-xs font-normal text-muted-foreground">
              Majalengka
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <CtaLink href="/ppdb" size="lg">
            Daftar PPDB
          </CtaLink>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
