import Link from "next/link";
import type { ComponentProps } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkProps = ComponentProps<typeof Link> & {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "default" | "lg" | "sm";
};

export function CtaLink({
  className,
  variant = "default",
  size = "default",
  ...props
}: CtaLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
