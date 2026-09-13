export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  priceFrom?: number;
  currency?: "SAR";
}
