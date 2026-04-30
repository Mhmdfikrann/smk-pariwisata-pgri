"use client";

import { useMemo, useState } from "react";
import { Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { major } from "@/lib/site-data";

type FormState = "idle" | "submitting" | "success" | "error";

export function PpdbForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const defaultMajor = useMemo(() => major.name, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/ppdb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as {
      ok: boolean;
      whatsappUrl?: string;
      error?: string;
    };

    if (!response.ok || !result.ok) {
      setState("error");
      setMessage(result.error ?? "Data belum bisa dikirim. Coba lagi.");
      return;
    }

    setState("success");
    setMessage("Data tersimpan. Anda akan diarahkan ke WhatsApp admin.");
    form.reset();
    window.setTimeout(() => {
      if (result.whatsappUrl) window.location.href = result.whatsappUrl;
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="studentName">Nama calon siswa</Label>
        <Input id="studentName" name="studentName" required placeholder="Nama lengkap" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="originSchool">Asal sekolah</Label>
        <Input id="originSchool" name="originSchool" required placeholder="SMP/MTs asal" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="parentName">Nama orang tua/wali</Label>
        <Input id="parentName" name="parentName" required placeholder="Nama orang tua/wali" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="whatsappNumber">Nomor WhatsApp</Label>
        <Input
          id="whatsappNumber"
          name="whatsappNumber"
          required
          inputMode="tel"
          placeholder="08xxxxxxxxxx"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="interestedMajor">Jurusan diminati</Label>
        <select
          id="interestedMajor"
          name="interestedMajor"
          defaultValue={defaultMajor}
          className="h-10 rounded-lg border bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          <option>{major.name}</option>
          <option>Konsultasi dulu</option>
        </select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Catatan tambahan</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Contoh: ingin bertanya biaya, jadwal daftar ulang, atau fasilitas."
        />
      </div>
      {message ? (
        <p className={state === "error" ? "text-sm text-destructive" : "text-sm text-primary"}>
          {message}
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={state === "submitting"} className="h-11">
        {state === "submitting" ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Kirim & Lanjut WhatsApp
      </Button>
    </form>
  );
}
