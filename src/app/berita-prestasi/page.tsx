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
import { posts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Berita & Prestasi",
  description:
    "Berita sekolah, kegiatan praktik, informasi PPDB, pengumuman, dan prestasi siswa/guru SMK Pariwisata PGRI Majalengka.",
};

export default function BeritaPrestasiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Berita & Prestasi"
        title="Informasi sekolah dan bukti kredibilitas"
        description="Halaman ini menggabungkan berita dan prestasi agar struktur website tetap ringkas, aktif, dan SEO-friendly."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Artikel"
          title="Kabar terbaru sekolah"
          description="Artikel dapat dikembangkan menjadi halaman detail dengan slug SEO-friendly saat CMS/admin panel final digunakan."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.title} className="rounded-lg">
              <div className="relative h-52">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant={post.type === "Prestasi" ? "secondary" : "outline"}>
                    {post.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  Kategori: {post.category}. Meta description dan related posts
                  disiapkan untuk kebutuhan SEO artikel.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
