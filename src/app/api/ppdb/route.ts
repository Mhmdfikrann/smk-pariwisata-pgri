import { NextResponse } from "next/server";

import { addLead } from "@/lib/leads";
import { school, whatsappUrl } from "@/lib/site-data";

type LeadPayload = {
  studentName?: string;
  originSchool?: string;
  parentName?: string;
  whatsappNumber?: string;
  interestedMajor?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  const requiredFields: Array<keyof LeadPayload> = [
    "studentName",
    "originSchool",
    "parentName",
    "whatsappNumber",
    "interestedMajor",
  ];

  const missing = requiredFields.find((field) => !payload[field]?.trim());
  if (missing) {
    return NextResponse.json(
      { ok: false, error: "Mohon lengkapi semua field wajib." },
      { status: 400 }
    );
  }

  const lead = await addLead({
    studentName: payload.studentName!.trim(),
    originSchool: payload.originSchool!.trim(),
    parentName: payload.parentName!.trim(),
    whatsappNumber: payload.whatsappNumber!.trim(),
    interestedMajor: payload.interestedMajor!.trim(),
    message: payload.message?.trim() ?? "",
  });

  const message = [
    `Halo Admin ${school.publicName}, saya ingin bertanya tentang PPDB.`,
    "",
    `Nama calon siswa: ${lead.studentName}`,
    `Asal sekolah: ${lead.originSchool}`,
    `Jurusan diminati: ${lead.interestedMajor}`,
  ].join("\n");

  return NextResponse.json({
    ok: true,
    lead,
    whatsappUrl: whatsappUrl(message),
  });
}
