import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { imageLibrary, profileSections, school } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description:
    "Profil SMK Pariwisata PGRI Majalengka, identitas sekolah, visi misi, akreditasi, dan kontak resmi.",
};

export default function ProfilSekolahPage() {
  const identities = [
    ["Nama resmi", school.officialName],
    ["Nama sekolah", school.publicName],
    ["NPSN", school.npsn],
    ["Status", school.status],
    ["Bentuk pendidikan", school.educationType],
    ["Akreditasi", school.accreditation],
    ["Telepon", school.phone],
    ["Email", `${school.email} / ${school.alternateEmail}`],
  ];

  return (
    <>
      <PageHeader
        eyebrow="Profil Sekolah"
        title="Identitas sekolah yang jelas untuk membangun kepercayaan orang tua"
        description="Halaman profil memuat informasi resmi sekolah, sejarah singkat, visi misi, sambutan kepala sekolah, dan data kontak."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Tentang Sekolah"
            title={school.publicName}
            description={profileSections.about}
          />
          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {profileSections.history}
          </p>
          <Card className="mt-8 rounded-lg">
            <CardHeader>
              <CardTitle>Sambutan Kepala Sekolah</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">
                {profileSections.principal}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="relative min-h-[380px] overflow-hidden rounded-lg">
          <Image
            src={imageLibrary.students}
            alt="Suasana siswa SMK"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-muted/70 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Visi & Misi"
              title={profileSections.vision}
              description="Misi sekolah diarahkan pada pembelajaran vokasi, karakter, dan kesiapan dunia kerja."
            />
          </div>
          <div className="grid gap-3">
            {profileSections.missions.map((mission) => (
              <p key={mission} className="flex gap-3 rounded-lg bg-background p-4 text-sm leading-6">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {mission}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Identitas"
          title="Data sekolah"
          description="Informasi identitas sekolah untuk membantu calon siswa dan orang tua mengenal SMK Pariwisata PGRI Majalengka."
        />
        <Card className="mt-8 rounded-lg">
          <CardContent className="pt-4">
            <div className="grid gap-0 md:grid-cols-2">
              {identities.map(([label, value], index) => (
                <div key={label}>
                  <div className="flex gap-4 py-4">
                    <Badge variant="outline" className="h-fit min-w-32 justify-center">
                      {label}
                    </Badge>
                    <p className="text-sm leading-6 text-muted-foreground">{value}</p>
                  </div>
                  {index !== identities.length - 1 ? <Separator /> : null}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Alamat:</strong> {school.address}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
