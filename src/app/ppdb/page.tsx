import type { Metadata } from "next";
import { CalendarDays, FileCheck2, Route } from "lucide-react";

import { PpdbForm } from "@/components/site/ppdb-form";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs, ppdb } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "PPDB SMK Terbaik di Majalengka",
  description:
    "Informasi PPDB SMK Pariwisata PGRI Majalengka, pilihan SMK terbaik di Majalengka untuk jurusan pariwisata, perhotelan, dan hospitality.",
};

export default function PpdbPage() {
  return (
    <>
      <PageHeader
        eyebrow="PPDB"
        title={`Pendaftaran siswa baru ${ppdb.year}`}
        description="Daftar dan konsultasikan pilihan jurusan di SMK Pariwisata PGRI Majalengka, sekolah kejuruan pariwisata dan perhotelan di Majalengka."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="space-y-5">
          <InfoList title="Jadwal Pendaftaran" icon={CalendarDays} items={ppdb.schedule} />
          <InfoList title="Syarat Pendaftaran" icon={FileCheck2} items={ppdb.requirements} />
          <InfoList title="Alur Pendaftaran" icon={Route} items={ppdb.flow} />
        </div>
        <Card className="rounded-lg">
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              Form Minat PPDB
            </Badge>
            <CardTitle>Isi data calon siswa</CardTitle>
          </CardHeader>
          <CardContent>
            <PpdbForm />
          </CardContent>
        </Card>
      </section>
      <section className="bg-muted/70 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Jawaban singkat untuk membantu calon siswa dan orang tua memahami proses PPDB."
          />
          <Accordion className="mt-6 rounded-lg bg-background p-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

function InfoList({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: string[];
}) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <Icon className="size-5 text-primary" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="grid gap-3">
          {items.map((item, index) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
