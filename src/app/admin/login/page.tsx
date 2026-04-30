"use client";

import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminLoginPage() {
  const router = useRouter();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem("smk-admin-demo", "true");
    router.push("/admin");
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
      <Card className="w-full rounded-lg">
        <CardHeader>
          <LockKeyhole className="size-6 text-primary" />
          <CardTitle>Login Admin</CardTitle>
          <CardDescription>
            Demo login untuk dashboard MVP. Autentikasi produksi perlu Better Auth/JWT dan database.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="admin@smkpgri.sch.id" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="admin123" required />
            </div>
            <Button type="submit">Masuk Dashboard</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
