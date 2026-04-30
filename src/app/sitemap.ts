import type { MetadataRoute } from "next";

import { navItems, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
