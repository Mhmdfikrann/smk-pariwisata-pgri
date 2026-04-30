import type { Metadata } from "next";
import Image from "next/image";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

import { CtaLink } from "@/components/site/cta-link";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { defaultWhatsappMessage, gallery, major, whatsappUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Jurusan Perhotelan & Pariwisata",
  description:
    "Informasi jurusan SMK Pariwisata PGRI Majalengka, kompetensi yang dipelajari, kegiatan praktik, dan prospek kerja.",
};

export default function JurusanPage() {
  return (
    <>
      <PageHeader
        eyebrow="Jurusan"
        title="Program keahlian Perhotelan & Pariwisata"
        description={major.summary}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Kompetensi"
            title="Keterampilan yang relevan dengan industri hospitality"
            description="Siswa belajar layanan, komunikasi, etika, grooming, food & beverage, dan praktik kerja yang dekat dengan kebutuhan industri."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {major.competencies.map((item) => (
              <p key={item} className="flex gap-2 rounded-lg bg-muted p-4 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-lg">
          <Image src={major.image} alt={major.name} fill className="object-cover" />
        </div>
      </section>

      <section className="bg-muted/70 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Prospek"
            title="Peluang kerja dan wirausaha"
            description="Lulusan diarahkan memiliki dasar keterampilan untuk dunia kerja, melanjutkan pendidikan, atau membangun usaha di bidang hospitality."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {major.prospects.map((item) => (
              <Card key={item} className="rounded-lg">
                <CardHeader>
                  <BriefcaseBusiness className="size-5 text-primary" />
                  <CardTitle>{item}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Praktik Siswa"
            title="Dokumentasi praktik dan kegiatan"
            description="Visual kegiatan membantu calon siswa memahami suasana pembelajaran jurusan."
          />
          <a href={whatsappUrl(defaultWhatsappMessage)} className="text-sm font-semibold text-primary">
            Tanya Jurusan Ini
          </a>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 3).map((item) => (
            <div key={item.title} className="relative h-56 overflow-hidden rounded-lg">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <Badge className="absolute left-3 top-3 bg-background text-foreground hover:bg-background">
                {item.category}
              </Badge>
            </div>
          ))}
        </div>
        <CtaLink href="/ppdb" className="mt-8">
          Daftar PPDB Sekarang
        </CtaLink>
      </section>
    </>
  );
}
