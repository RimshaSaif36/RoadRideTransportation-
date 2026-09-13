import { services } from "@/data/services";

// The core point-to-point routes shown on a vehicle's pricing page, pulled from
// the existing services list so prices stay in one place (src/data/services.ts).
// NOTE: these prices are currently the same for every vehicle — there's no
// per-vehicle pricing data in the project yet. If different vehicles should
// charge different fares for the same route, that data needs to be supplied
// and this file switched to a vehicle-slug -> route price lookup instead.
const routeSlugs = [
  "jeddah-airport-transfer",
  "makkah-hotel-transfer",
  "makkah-to-madinah",
  "madinah-hotel-transfer",
  "madinah-to-makkah",
  "haram-transport",
] as const;

export const routePricing = routeSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s))
  .map((s) => ({ label: s.title, price: s.priceFrom, currency: s.currency }));
