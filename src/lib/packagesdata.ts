export type Package = {
  title: string;
  price: number;
  features: string[];
  recommended: boolean;
};

export const packages: Package[] = [
  {
    title: "Essential",
    price: 50000,
    features: [
      "1 Day Wedding Coverage",
      "Traditional Photography",
      "Traditional Videography",
      "1 Album (30 Sheets)",
      "Digital Soft Copies",
    ],
    recommended: false,
  },
  {
    title: "Premium",
    price: 125000,
    features: [
      "2 Days Wedding Coverage",
      "Candid Photography",
      "Cinematic Videography",
      "Drone Coverage",
      "Pre-Wedding Shoot",
      "2 Premium Albums",
      "Instagram Teaser",
    ],
    recommended: true,
  },
  {
    title: "Luxury",
    price: 250000,
    features: [
      "3 Days Complete Coverage",
      "Senior Candid Team",
      "Cinematic Film (20-25 mins)",
      "Same Day Edit (Highlights)",
      "Pre-Wedding (Destination)",
      "3 Luxury Albums",
      "Live Streaming",
    ],
    recommended: false,
  },
];