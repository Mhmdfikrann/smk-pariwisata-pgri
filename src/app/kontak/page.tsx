import type { Metadata } from "next";
import { Mail, MapPinned, Phone, Send } from "lucide-react";

import { CtaLink } from "@/components/site/cta-link";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { defaultWhatsappMessage, school, whatsappUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Kontak & Lokasi",
  description:
    "Alamat, telepon, WhatsApp, email, Google Maps, jam operasional, dan form kontak SMK Pariwisata PGRI Majalengka.",
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontak & Lokasi"
        title="Hubungi sekolah dan temukan lokasi dengan mudah"
        description="Calon siswa dan orang tua dapat menghubungi sekolah, bertanya PPDB, atau datang langsung ke lokasi SMK Pariwisata PGRI Majalengka."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Kontak Resmi"
            title={school.publicName}
            description="Gunakan kontak resmi untuk bertanya tentang profil sekolah, jurusan, fasilitas, dan PPDB."
          />
          <ContactItem icon={MapPinned} title="Alamat" value={school.address} />
          <ContactItem icon={Phone} title="Telepon" value={school.phone} />
          <ContactItem icon={Mail} title="Email" value={`${school.email} / ${school.alternateEmail}`} />
          <ContactItem icon={Send} title="Jam Operasional" value={school.hours} />
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(defaultWhatsappMessage)}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Hubungi Sekolah
            </a>
            <CtaLink href={school.mapsUrl} variant="outline" target="_blank">
              Lihat Lokasi Sekolah
            </CtaLink>
          </div>
        </div>
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle>Form kontak sederhana</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nama</Label>
                <Input id="name" placeholder="Nama lengkap" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact">Email atau WhatsApp</Label>
                <Input id="contact" placeholder="Kontak aktif" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="note">Pesan</Label>
                <Textarea id="note" placeholder="Tulis pertanyaan Anda" />
              </div>
              <Button type="button">Kirim Pesan</Button>
            </form>
          </CardContent>
        </Card>
      </section>
      <section className="bg-muted/70 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <iframe
            src={school.mapsEmbed}
            className="h-[420px] w-full rounded-lg border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi SMK Pariwisata PGRI Majalengka"
          />
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-lg border bg-background p-4">
      <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
