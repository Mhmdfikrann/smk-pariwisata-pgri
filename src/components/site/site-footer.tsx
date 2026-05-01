import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { navItems, school } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold">{school.publicName}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Informasi sekolah, jurusan, kegiatan, fasilitas, dan PPDB untuk
            calon siswa, orang tua, alumni, dan mitra sekolah.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {school.address}
            </p>
            <p className="flex gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              {school.phone}
            </p>
            <p className="flex gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              {school.email}
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Link Cepat</p>
          <div className="mt-3 grid gap-2 text-sm">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold">Informasi</p>
          <div className="mt-3 grid gap-2 text-sm">
            {navItems.slice(4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>Copyright 2026 {school.publicName}. All rights reserved.</span>
        <span>SMK pariwisata dan perhotelan di Majalengka.</span>
      </div>
    </footer>
  );
}
