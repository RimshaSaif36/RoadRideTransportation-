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
      // Jeddah Routes
      "jeddah-airport-jeddah-hotel": 150,
      "jeddah-hotel-jeddah-airport": 250,
      "jeddah-airport-makkah-hotel": 450,
      
      // Makkah Routes
      "makkah-hotel-jeddah-hotel": 400,
      "makkah-hotel-makkah-hotel": 200,
      "jeddah-airport-makkah-transfer": 200,
      "makkah-hotel-return": 200,
      "makkah-ziarat": 250,
      
      // Madinah Routes
      "madinah-hotel-makkah-hotel": 400,
      "madinah-hotel-madinah-hotel": 400,
      "jeddah-airport-madinah-hotel": 150,
      "madinah-ziarat": 200,
      
      // Taif & Other
      "taif-tour": 500,
      "madinah-airport-madinah-hotel": 150,
      
      // Legacy routes (for backwards compatibility)
      "makkah-hotel-transfer": 200,
      "makkah-to-madinah": 450,
      "madinah-hotel-transfer": 200,
      "madinah-to-makkah": 400,
      "jeddah-airport-transfer": 150,
      "haram-transport": 150,
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
      // Jeddah Routes
      "jeddah-airport-jeddah-hotel": 200,
      "jeddah-hotel-jeddah-airport": 300,
      "jeddah-airport-makkah-hotel": 550,
      
      // Makkah Routes
      "makkah-hotel-jeddah-hotel": 500,
      "makkah-hotel-makkah-hotel": 250,
      "jeddah-airport-makkah-transfer": 250,
      "makkah-hotel-return": 250,
      "makkah-ziarat": 300,
      
      // Madinah Routes
      "madinah-hotel-makkah-hotel": 500,
      "madinah-hotel-madinah-hotel": 500,
      "jeddah-airport-madinah-hotel": 200,
      "madinah-ziarat": 250,
      
      // Taif & Other
      "taif-tour": 600,
      "madinah-airport-madinah-hotel": 200,
      
      // Legacy routes
      "makkah-hotel-transfer": 250,
      "makkah-to-madinah": 550,
      "madinah-hotel-transfer": 250,
      "madinah-to-makkah": 500,
      "jeddah-airport-transfer": 200,
      "haram-transport": 200,
    },
  },

  // VAN - 7-10 Passenger (Staria, Grand Starex, Hiace)
  {
    vehicleSlug: "staria",
    vehicleName: "Hyundai Staria",
    pricing: {
      "jeddah-airport-makkah-hotel": 350,
      "makkah-ziarat": 300,
      "madinah-ziarat": 300,
      "makkah-to-jeddah-airport": 300,
      "makkah-to-madinah-hotel": 550,
      "madinah-airport-madinah-hotel": 250,
    },
  },

  {
    vehicleSlug: "grand-starex",
    vehicleName: "Hyundai Grand Starex",
    pricing: {
      "jeddah-airport-makkah-hotel": 350,
      "makkah-ziarat": 300,
      "madinah-ziarat": 300,
      "makkah-to-jeddah-airport": 300,
      "makkah-to-madinah": 550,
      "jeddah-airport-madinah-hotel": 600,
      "madinah-airport-madinah-hotel": 300,
    },
  },

  {
    vehicleSlug: "hiace",
    vehicleName: "Toyota Hiace",
    pricing: {
      // Jeddah Routes
      "jeddah-airport-jeddah-hotel": 250,
      "jeddah-hotel-jeddah-airport": 350,
      "jeddah-airport-makkah-hotel": 650,
      
      // Makkah Routes
      "makkah-hotel-jeddah-hotel": 600,
      "makkah-hotel-makkah-hotel": 350,
      "jeddah-airport-makkah-transfer": 350,
      "makkah-hotel-return": 350,
      "makkah-ziarat": 350,
      
      // Madinah Routes
      "madinah-hotel-makkah-hotel": 600,
      "madinah-hotel-madinah-hotel": 600,
      "jeddah-airport-madinah-hotel": 250,
      "madinah-ziarat": 300,
      
      // Taif & Other
      "taif-tour": 700,
      "madinah-airport-madinah-hotel": 300,
      
      // Legacy routes
      "makkah-hotel-transfer": 350,
      "makkah-to-madinah": 900,
      "madinah-hotel-transfer": 350,
      "madinah-to-makkah": 850,
      "jeddah-airport-transfer": 250,
      "haram-transport": 250,
    },
  },

  // COASTER/BUS - 24-30 Passenger
  {
    vehicleSlug: "coaster",
    vehicleName: "Toyota Coaster",
    pricing: {
      // Jeddah Routes
      "jeddah-airport-jeddah-hotel": 400,
      "jeddah-hotel-jeddah-airport": 600,
      "jeddah-airport-makkah-hotel": 900,
      
      // Makkah Routes
      "makkah-hotel-jeddah-hotel": 850,
      "makkah-hotel-makkah-hotel": 450,
      "jeddah-airport-makkah-transfer": 450,
      "makkah-hotel-return": 450,
      "makkah-ziarat": 450,
      
      // Madinah Routes
      "madinah-hotel-makkah-hotel": 850,
      "madinah-hotel-madinah-hotel": 850,
      "jeddah-airport-madinah-hotel": 350,
      "madinah-ziarat": 350,
      
      // Taif & Other
      "taif-tour": 900,
      "madinah-airport-madinah-hotel": 400,
      
      // Legacy routes
      "makkah-hotel-transfer": 450,
      "makkah-to-madinah": 900,
      "madinah-hotel-transfer": 450,
      "madinah-to-makkah": 850,
      "jeddah-airport-transfer": 400,
      "haram-transport": 350,
    },
  },
];

// Hyundai Staria has a dedicated route list supplied by the operator.
// Keep this separate so changing it never affects the other vehicles.
export const stariaRoutes = [
  { slug: "jeddah-airport-makkah-hotel", name: "Jeddah Airport To Makkah Hotel" },
  { slug: "makkah-ziarat", name: "Makkah Ziyarat Taxi" },
  { slug: "madinah-ziarat", name: "Madinah Ziyarat Taxi" },
  { slug: "makkah-to-jeddah-airport", name: "Makkah To Jeddah Airport" },
  { slug: "makkah-to-madinah-hotel", name: "Makkah To Madinah Hotel" },
  { slug: "madinah-airport-madinah-hotel", name: "Madinah Airport To Madinah Hotel" },
];

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
export const grandStarexRoutes = [
  { slug: "jeddah-airport-makkah-hotel", name: "Jeddah Airport To Makkah Hotel" },
  { slug: "makkah-ziarat", name: "Makkah Ziyarat" },
  { slug: "madinah-ziarat", name: "Madinah Ziyarat" },
  { slug: "makkah-to-jeddah-airport", name: "Makkah To Jeddah Airport" },
  { slug: "makkah-to-madinah", name: "Makkah To Madinah" },
  { slug: "jeddah-airport-madinah-hotel", name: "Jeddah Airport To Madinah Hotel" },
  { slug: "madinah-airport-madinah-hotel", name: "Madinah Airport To Madinah Hotel" },
];

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

// Get all unique routes
export const allRoutes = [
  { slug: "jeddah-airport-jeddah-hotel", name: "Jeddah Airport ↔ Jeddah Hotel" },
  { slug: "jeddah-hotel-jeddah-airport", name: "Jeddah Hotel → Jeddah Airport" },
  { slug: "jeddah-airport-makkah-hotel", name: "Jeddah Airport → Makkah Hotel" },
  { slug: "makkah-hotel-jeddah-hotel", name: "Makkah Hotel ↔ Jeddah Hotel" },
  { slug: "makkah-hotel-makkah-hotel", name: "Makkah Hotel ↔ Makkah Hotel" },
  { slug: "jeddah-airport-makkah-transfer", name: "Jeddah Airport → Makkah (Transfer)" },
  { slug: "makkah-hotel-return", name: "Makkah Hotel (Return)" },
  { slug: "makkah-ziarat", name: "Makkah Ziarat" },
  { slug: "madinah-hotel-makkah-hotel", name: "Madinah Hotel ↔ Makkah Hotel" },
  { slug: "madinah-hotel-madinah-hotel", name: "Madinah Hotel ↔ Madinah Hotel" },
  { slug: "jeddah-airport-madinah-hotel", name: "Jeddah Airport → Madinah Hotel" },
  { slug: "madinah-ziarat", name: "Madinah Ziarat" },
  { slug: "taif-tour", name: "Taif Tour" },
  { slug: "madinah-airport-madinah-hotel", name: "Madinah Airport → Madinah Hotel" },
];
