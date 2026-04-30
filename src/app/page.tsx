import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { CtaLink } from "@/components/site/cta-link";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import {
  advantages,
  defaultWhatsappMessage,
  facilities,
  gallery,
  heroImage,
  major,
  posts,
  profileSections,
  school,
  stats,
  whatsappUrl,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-muted/70">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Siswa belajar praktik hospitality"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/48 to-black/20" />
        </div>
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl text-white">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary">
              PPDB {new Date().getFullYear()}
            </Badge>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Bangun Masa Depan di Dunia Pariwisata & Perhotelan
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
              {school.publicName} membekali siswa dengan keterampilan,
              karakter, dan pengalaman praktik untuk siap kerja, kuliah, maupun
              berwirausaha.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/ppdb" size="lg" className="h-11 px-5">
                Daftar PPDB Sekarang
                <ArrowRight className="size-4" />
              </CtaLink>
              <a
                href={whatsappUrl(defaultWhatsappMessage)}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-white/30 bg-white/12 px-5 text-white hover:bg-white/20 hover:text-white"
                )}
              >
                <MessageCircle className="size-4" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden rounded-lg border border-white/20 bg-white/12 p-4 text-white backdrop-blur lg:block">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-white/14 p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/75">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Profil Singkat"
              title="Sekolah kejuruan dengan fokus hospitality di Majalengka"
              description={profileSections.about}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline">NPSN {school.npsn}</Badge>
              <Badge variant="outline">Akreditasi {school.accreditation}</Badge>
              <Badge variant="outline">{school.status}</Badge>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <Card key={item.title} className="rounded-lg">
                <CardHeader>
                  <item.icon className="size-5 text-primary" />
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/70 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Jurusan"
              title="Program Keahlian Perhotelan & Pariwisata"
              description={major.summary}
            />
            <CtaLink href="/jurusan" variant="outline">
              Detail Jurusan
            </CtaLink>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[320px] overflow-hidden rounded-lg">
              <Image
                src={major.image}
                alt="Praktik perhotelan dan hospitality"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle>Kompetensi yang dipelajari</CardTitle>
                <CardDescription>
                  Bekal praktis untuk dunia kerja dan wirausaha.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {major.competencies.slice(0, 8).map((item) => (
                    <p key={item} className="flex gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Fasilitas"
            title="Lingkungan belajar dan praktik"
            description="Preview fasilitas sekolah yang mendukung pembelajaran akademik, praktik, dan kegiatan siswa."
          />
          <CtaLink href="/fasilitas" variant="outline">
            Lihat Fasilitas
          </CtaLink>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.slice(0, 3).map((item) => (
            <Card key={item.title} className="rounded-lg">
              <div className="relative h-44">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {item.category}
                </Badge>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/70 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Galeri & Berita"
                title="Aktivitas sekolah yang hidup dan terdokumentasi"
                description="Galeri kegiatan, praktik jurusan, event, dan berita membantu calon siswa melihat suasana sekolah secara nyata."
              />
              <CtaLink href="/galeri-kegiatan" variant="outline" className="mt-6">
                Buka Galeri
              </CtaLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.slice(0, 4).map((item) => (
                <div key={item.title} className="relative h-44 overflow-hidden rounded-lg">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-white">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-white/75">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title} className="rounded-lg">
                <CardHeader>
                  <Badge variant="outline" className="w-fit">
                    {post.type}
                  </Badge>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/berita-prestasi" className="text-sm font-semibold text-primary">
                    Baca selengkapnya
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/75">
              PPDB
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Siap bertanya atau mendaftar?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-primary-foreground/80">
              Isi form minat PPDB atau hubungi admin untuk konsultasi jurusan,
              jadwal, persyaratan, dan proses daftar ulang.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <CtaLink href="/ppdb" variant="secondary" className="h-10 px-4">
              Isi Form PPDB
            </CtaLink>
            <a
              href={whatsappUrl(defaultWhatsappMessage)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-10 border-white/35 bg-transparent px-4 text-white hover:bg-white/12 hover:text-white"
              )}
            >
              WhatsApp Admin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
