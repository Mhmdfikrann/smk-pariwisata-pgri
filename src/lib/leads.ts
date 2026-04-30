import { promises as fs } from "node:fs";
import path from "node:path";

export type PpdbLead = {
  id: string;
  studentName: string;
  originSchool: string;
  parentName: string;
  whatsappNumber: string;
  interestedMajor: string;
  message: string;
  source: string;
  status: "new" | "contacted" | "registered" | "closed" | "lost";
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const leadsPath = path.join(dataDir, "ppdb-leads.json");

async function ensureStorage() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(leadsPath);
  } catch {
    await fs.writeFile(leadsPath, "[]", "utf8");
  }
}

export async function readLeads(): Promise<PpdbLead[]> {
  await ensureStorage();
  const raw = await fs.readFile(leadsPath, "utf8");
  return JSON.parse(raw) as PpdbLead[];
}

export async function addLead(
  lead: Omit<PpdbLead, "id" | "status" | "createdAt" | "source"> & {
    source?: string;
  }
) {
  const leads = await readLeads();
  const newLead: PpdbLead = {
    ...lead,
    id: crypto.randomUUID(),
    source: lead.source ?? "website",
    status: "new",
    createdAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2), "utf8");
  return newLead;
}
