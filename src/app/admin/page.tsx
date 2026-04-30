import type { Metadata } from "next";
import { Download } from "lucide-react";

import { PageHeader } from "@/components/site/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { readLeads } from "@/lib/leads";
import { adminFeatures, gallery, posts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const leads = await readLeads();

  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Dashboard pengelolaan konten dan leads PPDB"
        description="Dashboard MVP menampilkan ringkasan konten, galeri, berita/prestasi, dan data leads PPDB dari form website."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard title="Leads PPDB" value={leads.length.toString()} />
          <SummaryCard title="Galeri" value={gallery.length.toString()} />
          <SummaryCard title="Berita" value={posts.length.toString()} />
          <SummaryCard title="Status PPDB" value="Aktif" />
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {adminFeatures.slice(0, 8).map((feature) => (
            <Card key={feature.title} className="rounded-lg">
              <CardHeader>
                <feature.icon className="size-5 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Card className="mt-8 rounded-lg">
          <CardHeader className="sm:flex sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Leads PPDB</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Data disimpan sementara di file JSON lokal untuk MVP development.
              </p>
            </div>
            <Button variant="outline" disabled>
              <Download className="size-4" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Asal Sekolah</TableHead>
                    <TableHead>Orang Tua</TableHead>
                    <TableHead>WhatsApp</TableHead>
                    <TableHead>Jurusan</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.length ? (
                    leads.map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>{lead.studentName}</TableCell>
                        <TableCell>{lead.originSchool}</TableCell>
                        <TableCell>{lead.parentName}</TableCell>
                        <TableCell>{lead.whatsappNumber}</TableCell>
                        <TableCell>{lead.interestedMajor}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{lead.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                        Belum ada lead PPDB.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

function SummaryCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <p className="text-sm text-muted-foreground">{title}</p>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}
