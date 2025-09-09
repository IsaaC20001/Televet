export enum Specialization {
  CATTLE = 'Cattle',
  POULTRY = 'Poultry',
  GOATS = 'Goats & Sheep',
  PIGS = 'Pigs',
  PETS = 'Companion Animals',
  EQUINE = 'Equine',
}

export enum ServiceType {
    FARM_VISIT = 'Farm Visit',
    VIDEO_CONSULT = 'Video Consultation',
    CLINIC_APPOINTMENT = 'Clinic Appointment',
}

export enum UserRole {
  FARMER = 'Farmer',
  DOCTOR = 'Doctor',
  CLINIC = 'Clinic',
  ADMIN = 'Admin',
}

export enum RequestStatus {
  PENDING = 'Pending',
  ACCEPTED = 'Accepted',
  ASSIGNED = 'Assigned',
  EN_ROUTE = 'En Route',
  COMPLETED = 'Completed',
  CANCELLED = 'Cancelled',
}

export interface Vet {
  id: number;
  name: string;
  clinicName: string;
  specializations: Specialization[];
  rating: number;
  reviews: number;
  isAvailable: boolean;
  location: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
  bio: string;
}

export interface Farmer {
  id: string;
  name: string;
  phone: string;
  animals: Animal[];
}

export interface Animal {
  id: string;
  name: string;
  type: Specialization;
  age: number;
  notes: string;
}

export interface Clinic {
  id: string;
  name: string;
  location: string;
  doctors: number[]; // array of vet IDs
  rating: number;
}

export interface ServiceRequest {
  id: string;
  farmerId: string;
  animalId: string;
  vetId?: number;
  clinicId?: string;
  status: RequestStatus;
  description: string;
  serviceType: ServiceType;
  timestamp: string;
}

export interface AdminData {
    kpis: {
        farmers: number;
        doctors: number;
        clinics: number;
        revenue: number;
    };
    verifications: {
        id: string;
        name: string;
        type: 'Doctor' | 'Clinic';
        status: 'Pending';
    }[];
}


export interface ChatMessage {
    sender: 'user' | 'ai' | 'vet' | 'farmer';
    text: string;
    timestamp?: string;
}

export interface HealthRecord {
  id: string;
  animalName: string;
  animalType: Specialization;
  date: string;
  service: string;
  notes: string;
  vetId: number;
}