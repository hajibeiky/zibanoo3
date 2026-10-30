export type SalonType = 'women' | 'men' | 'both';
export type PriceLevel = 'budget' | 'medium' | 'premium';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircut' | 'color' | 'skincare' | 'makeup' | 'nail' | 'beard' | 'other';
  categoryLabel: string;
  price: number; // in Tomans
  durationMinutes: number;
  description?: string;
  supportsAtHome: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  likes: number;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  avatar: string;
  experienceYears: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  serviceName: string;
}

export interface Salon {
  id: string;
  name: string;
  type: SalonType;
  typeLabel: string;
  city: string;
  neighborhood: string;
  address: string;
  phone: string;
  rating: number;
  reviewsCount: number;
  priceLevel: PriceLevel;
  priceLevelLabel: string;
  minPrice: number;
  isAtHomeAvailable: boolean;
  atHomeDetails?: string;
  coverImage: string;
  logoImage: string;
  workingHours: string;
  about: string;
  features: string[];
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  stylists: Stylist[];
  reviews: Review[];
}

export interface BookingRequest {
  id: string;
  bookingCode: string;
  salonId: string;
  salonName: string;
  serviceId: string;
  serviceName: string;
  price: number;
  serviceType: 'in_salon' | 'at_home';
  stylistName: string;
  customerName: string;
  customerPhone: string;
  dateStr: string;
  timeSlot: string;
  addressOrNotes?: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
  reminderEnabled: boolean;
}

export interface StylistApplication {
  id: string;
  salonName: string;
  managerName: string;
  phone: string;
  city: string;
  neighborhood: string;
  salonType: SalonType;
  providesAtHome: boolean;
  licenseNumber: string;
  servicesSummary: string;
  submittedAt: string;
}
