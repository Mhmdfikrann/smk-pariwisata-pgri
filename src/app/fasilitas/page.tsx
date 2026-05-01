import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { facilities } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fasilitas",
  description:
    "Fasilitas SMK Pariwisata PGRI Majalengka untuk pembelajaran, praktik hospitality, literasi, ibadah, dan kegiatan siswa.",
};

export default function FasilitasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fasilitas"
        title="Fasilitas belajar, praktik, dan kegiatan siswa"
        description="Setiap fasilitas ditampilkan dengan kategori, deskripsi singkat, dan foto agar orang tua dapat melihat lingkungan belajar secara visual."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Lingkungan Sekolah"
          title="Ruang yang mendukung pembelajaran vokasi"
          description="Fasilitas sekolah mendukung pembelajaran teori, praktik hospitality, pembinaan karakter, dan kegiatan siswa."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <Card key={facility.title} className="rounded-lg">
              <div className="relative h-52">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <CardHeader>
                <facility.icon className="size-5 text-primary" />
                <Badge variant="secondary" className="w-fit">
                  {facility.category}
                </Badge>
                <CardTitle>{facility.title}</CardTitle>
                <CardDescription>{facility.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  Fasilitas ini membantu siswa belajar dengan suasana yang
                  tertata, praktis, dan mudah dipantau oleh sekolah.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
