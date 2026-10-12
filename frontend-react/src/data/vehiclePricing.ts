// Vehicle-specific pricing for different routes
// Each vehicle has different rates based on capacity and type

export interface PricingByRoute {
  [routeSlug: string]: number;
}

export interface VehiclePricing {
  vehicleSlug: string;
  vehicleName: string;
  pricing: PricingByRoute;
}

export const vehiclePricing: VehiclePricing[] = [
  // SEDAN - 4 Passenger (Camry)
  {
    vehicleSlug: "camry",
    vehicleName: "Toyota Camry",
    pricing: {
      "jeddah-airport-jeddah-hotel": 150,
      "jeddah-hotel-jeddah-airport": 250,
      "jeddah-airport-madinah-hotel": 450,
      "makkah-hotel-madinah-hotel": 400,
      "makkah-hotel-jeddah-airport": 200,
      "makkah-hotel-makkah-hotel": 200,
      "makkah-ziarat": 250,
      "madinah-hotel-makkah-hotel": 400,
      "madinah-hotel-jeddah-airport": 400,
      "madinah-hotel-madinah-airport": 150,
      "madinah-ziarat": 200,
      "taif-tour": 500,
      "madinah-airport-madinah-hotel": 150,
      "jeddah-airport-makkah-hotel": 450,
    },
  },

  // SUV - 7 Passenger
  {
    vehicleSlug: "gmc-yukon-xl",
    vehicleName: "GMC Yukon XL",
    pricing: {
      "jeddah-airport-jeddah-hotel": 250,
      "jeddah-hotel-jeddah-airport": 450,
      "jeddah-airport-madinah-hotel": 900,
      "makkah-hotel-madinah-hotel": 850,
      "makkah-hotel-jeddah-airport": 350,
      "makkah-hotel-makkah-hotel": 350,
      "makkah-ziarat": 350,
      "madinah-hotel-makkah-hotel": 850,
      "madinah-hotel-jeddah-airport": 850,
      "madinah-hotel-madinah-airport": 250,
      "madinah-ziarat": 300,
      "taif-tour": 800,
      "madinah-airport-madinah-hotel": 300,
    },
  },

  {
    vehicleSlug: "suv",
    vehicleName: "Standard SUV",
    pricing: {
      "jeddah-airport-jeddah-hotel": 150,
      "jeddah-hotel-jeddah-airport": 250,
      "jeddah-airport-madinah-hotel": 500,
      "makkah-hotel-madinah-hotel": 450,
      "makkah-hotel-jeddah-airport": 200,
      "makkah-hotel-makkah-hotel": 200,
      "makkah-ziarat": 250,
      "madinah-hotel-makkah-hotel": 450,
      "madinah-hotel-jeddah-airport": 450,
      "madinah-hotel-madinah-airport": 150,
      "madinah-ziarat": 200,
      "taif-tour": 550,
      "madinah-airport-madinah-hotel": 150,
    },
  },

  // VAN - 7-10 Passenger (Staria, Grand Starex, Hiace)
  {
    vehicleSlug: "staria",
    vehicleName: "Hyundai Staria",
    pricing: {
      "jeddah-airport-jeddah-hotel": 200,
      "jeddah-hotel-jeddah-airport": 300,
      "jeddah-airport-madinah-hotel": 550,
      "makkah-hotel-madinah-hotel": 500,
      "makkah-hotel-jeddah-airport": 250,
      "makkah-hotel-makkah-hotel": 250,
      "makkah-ziarat": 300,
      "madinah-hotel-makkah-hotel": 500,
      "madinah-hotel-jeddah-airport": 500,
      "madinah-hotel-madinah-airport": 200,
      "madinah-ziarat": 250,
      "taif-tour": 600,
      "madinah-airport-madinah-hotel": 200,
    },
  },

  {
    vehicleSlug: "grand-starex",
    vehicleName: "Hyundai Grand Starex",
    pricing: {
      "jeddah-airport-jeddah-hotel": 200,
      "jeddah-hotel-jeddah-airport": 300,
      "jeddah-airport-madinah-hotel": 550,
      "makkah-hotel-madinah-hotel": 500,
      "makkah-hotel-jeddah-airport": 250,
      "makkah-hotel-makkah-hotel": 250,
      "makkah-ziarat": 300,
      "madinah-hotel-makkah-hotel": 500,
      "madinah-hotel-jeddah-airport": 500,
      "madinah-hotel-madinah-airport": 200,
      "madinah-ziarat": 250,
      "taif-tour": 600,
      "madinah-airport-madinah-hotel": 200,
    },
  },

  {
    vehicleSlug: "hiace",
    vehicleName: "Toyota Hiace",
    pricing: {
      "jeddah-airport-jeddah-hotel": 250,
      "jeddah-hotel-jeddah-airport": 350,
      "jeddah-airport-madinah-hotel": 650,
      "makkah-hotel-madinah-hotel": 600,
      "makkah-hotel-jeddah-airport": 350,
      "makkah-hotel-makkah-hotel": 350,
      "makkah-ziarat": 350,
      "madinah-hotel-makkah-hotel": 600,
      "madinah-hotel-jeddah-airport": 600,
      "madinah-hotel-madinah-airport": 250,
      "madinah-ziarat": 300,
      "taif-tour": 700,
      "madinah-airport-madinah-hotel": 300,
    },
  },

  // COASTER/BUS - 24-30 Passenger
  {
    vehicleSlug: "coaster",
    vehicleName: "Toyota Coaster",
    pricing: {
      "jeddah-airport-jeddah-hotel": 400,
      "jeddah-hotel-jeddah-airport": 600,
      "jeddah-airport-madinah-hotel": 900,
      "makkah-hotel-madinah-hotel": 850,
      "makkah-hotel-jeddah-airport": 450,
      "makkah-hotel-makkah-hotel": 450,
      "makkah-ziarat": 450,
      "madinah-hotel-makkah-hotel": 850,
      "madinah-hotel-jeddah-airport": 850,
      "madinah-hotel-madinah-airport": 350,
      "madinah-ziarat": 350,
      "taif-tour": 900,
      "madinah-airport-madinah-hotel": 400,
    },
  },
];

// Get all unique routes
export const allRoutes = [
  { slug: "jeddah-airport-jeddah-hotel", name: "Jeddah Airport To Jeddah Hotel" },
  { slug: "jeddah-hotel-jeddah-airport", name: "Jeddah Hotel To Jeddah Airport" },
  { slug: "jeddah-airport-madinah-hotel", name: "Jeddah Airport To Madinah Hotel" },
  { slug: "makkah-hotel-madinah-hotel", name: "Makkah Hotel To Madinah Hotel" },
  { slug: "makkah-hotel-jeddah-airport", name: "Makkah Hotel To Jeddah Airport" },
  { slug: "makkah-hotel-makkah-hotel", name: "Makkah Hotel To Makkah Hotel" },
  { slug: "makkah-ziarat", name: "Makkah Ziarat" },
  { slug: "madinah-hotel-makkah-hotel", name: "Madinah Hotel To Makkah Hotel" },
  { slug: "madinah-hotel-jeddah-airport", name: "Madinah Hotel To Jeddah Airport" },
  { slug: "madinah-hotel-madinah-airport", name: "Madinah Hotel To Madinah Airport" },
  { slug: "madinah-ziarat", name: "Madinah Ziarat" },
  { slug: "taif-tour", name: "Taif Tour" },
  { slug: "madinah-airport-madinah-hotel", name: "Madinah Airport To Madinah Hotel" },
];

// Hyundai Staria has a dedicated route list supplied by the operator.
// Keep this separate so changing it never affects the other vehicles.
export const stariaRoutes = allRoutes;

// GMC Yukon XL follows the operator's dedicated 1447 route chart.
export const gmcRoutes = [
  { slug: "jeddah-airport-jeddah-hotel", name: "Jeddah Airport To Jeddah Hotel" },
  { slug: "jeddah-hotel-jeddah-airport", name: "Jeddah Hotel To Jeddah Airport" },
  { slug: "jeddah-airport-madinah-hotel", name: "Jeddah Airport To Madinah Hotel" },
  { slug: "makkah-hotel-madinah-hotel", name: "Makkah Hotel To Madinah Hotel" },
  { slug: "makkah-hotel-jeddah-airport", name: "Makkah Hotel To Jeddah Airport" },
  { slug: "makkah-hotel-makkah-hotel", name: "Makkah Hotel To Makkah Hotel" },
  { slug: "makkah-ziarat", name: "Makkah Ziarat" },
  { slug: "madinah-hotel-makkah-hotel", name: "Madinah Hotel To Makkah Hotel" },
  { slug: "madinah-hotel-jeddah-airport", name: "Madinah Hotel To Jeddah Airport" },
  { slug: "madinah-hotel-madinah-airport", name: "Madinah Hotel To Madinah Airport" },
  { slug: "madinah-ziarat", name: "Madinah Ziarat" },
  { slug: "taif-tour", name: "Taif Tour" },
  { slug: "madinah-airport-madinah-hotel", name: "Madinah Airport To Madinah Hotel" },
];

// Hyundai Grand Starex has its own confirmed route list and fares.
export const grandStarexRoutes = allRoutes;

// Helper function to get price for a specific vehicle and route
export function getVehiclePrice(
  vehicleSlug: string,
  routeSlug: string
): number | null {
  const vehicle = vehiclePricing.find((v) => v.vehicleSlug === vehicleSlug);
  if (!vehicle) return null;
  return vehicle.pricing[routeSlug] || null;
}

// Get all routes with prices for a specific vehicle
export function getVehicleRoutes(vehicleSlug: string) {
  const vehicle = vehiclePricing.find((v) => v.vehicleSlug === vehicleSlug);
  if (!vehicle) return null;
  return vehicle.pricing;
}
