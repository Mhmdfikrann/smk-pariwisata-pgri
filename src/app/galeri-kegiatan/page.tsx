import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gallery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Galeri & Kegiatan",
  description:
    "Galeri foto kegiatan belajar, praktik jurusan, event sekolah, PPDB, kunjungan industri, PKL, dan ekstrakurikuler.",
};

export default function GaleriKegiatanPage() {
  const categories = Array.from(new Set(gallery.map((item) => item.category)));

  return (
    <>
      <PageHeader
        eyebrow="Galeri & Kegiatan"
        title="Dokumentasi kegiatan sekolah dalam satu halaman"
        description="Lihat dokumentasi kegiatan belajar, praktik jurusan, dan event sekolah yang menunjukkan suasana SMK Pariwisata PGRI Majalengka."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Kategori"
            title="Kegiatan belajar, praktik, dan event"
            description="Dokumentasi ini membantu calon siswa mengenal pengalaman belajar di sekolah pariwisata dan perhotelan di Majalengka."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="group relative h-64 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <Badge className="mb-2 bg-secondary text-secondary-foreground hover:bg-secondary">
                  {item.category}
                </Badge>
                <p className="font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted/70 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="rounded-lg">
            <CardHeader>
              <CardTitle>Video Kegiatan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-background text-center text-sm text-muted-foreground">
                Dokumentasi video kegiatan sekolah, praktik jurusan, dan aktivitas siswa.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
