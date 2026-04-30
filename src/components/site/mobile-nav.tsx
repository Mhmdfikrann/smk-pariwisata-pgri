"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navItems, school, whatsappUrl, defaultWhatsappMessage } from "@/lib/site-data";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="icon-lg" />}>
        <Menu />
        <span className="sr-only">Buka menu</span>
      </SheetTrigger>
      <SheetContent className="w-[88vw] max-w-sm">
        <SheetHeader>
          <SheetTitle>{school.publicName}</SheetTitle>
          <SheetDescription>Menu utama website sekolah.</SheetDescription>
        </SheetHeader>
        <nav className="grid gap-1 px-4">
          {navItems.map((item) => (
            <SheetClose
              key={item.href}
              render={
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted"
                />
              }
            >
              {item.label}
            </SheetClose>
          ))}
        </nav>
        <Separator />
        <div className="px-4">
          <Button className="w-full" render={<a href={whatsappUrl(defaultWhatsappMessage)} />}>
            Tanya PPDB
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
