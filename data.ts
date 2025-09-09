import { Farmer, Vet, Clinic, ServiceRequest, RequestStatus, Specialization, ServiceType, AdminData, HealthRecord } from './types';

// Vets (Doctors)
export const DUMMY_VETS: Vet[] = [
  {
    id: 1,
    name: 'Dr. Sarah Kintu',
    clinicName: 'Mengo Vet Clinic',
    specializations: [Specialization.CATTLE],
    rating: 4.5,
    reviews: 132,
    isAvailable: true,
    location: { lat: 0.3136, lng: 32.5811 }, // Kampala
    imageUrl: 'https://images.unsplash.com/photo-1588694853934-20775407d57c?q=80&w=200&auto=format&fit=crop',
    bio: 'Expert in dairy cow health and productivity. Based in Kampala.'
  },
  {
    id: 2,
    name: 'Dr. James Ouma',
    clinicName: 'Mengo Vet Clinic',
    specializations: [Specialization.POULTRY, Specialization.GOATS],
    rating: 5.0,
    reviews: 215,
    isAvailable: false,
    location: { lat: 0.3349, lng: 32.5534 }, // Near Kampala
    imageUrl: 'https://images.unsplash.com/photo-1622263458623-21c60e127a5f?q=80&w=200&auto=format&fit=crop',
    bio: 'Specialist in poultry and goat health. Currently busy on a farm visit.'
  },
  {
    id: 3,
    name: 'Dr. Rebecca Atuhaire',
    clinicName: 'Northern AgroVet',
    specializations: [Specialization.PIGS, Specialization.CATTLE],
    rating: 4.2,
    reviews: 88,
    isAvailable: true,
    location: { lat: 2.7725, lng: 32.2896 }, // Gulu
    imageUrl: 'https://images.unsplash.com/photo-1599041438513-353685223a41?q=80&w=200&auto=format&fit=crop',
    bio: 'Experienced in general livestock with a focus on pig health. Serving the Gulu region.'
  }
];

// Clinics
export const DUMMY_CLINICS: Clinic[] = [
  {
    id: 'C001',
    name: 'Mengo Vet Clinic',
    location: 'Kampala',
    doctors: [1, 2],
    rating: 4.8,
  },
  {
    id: 'C002',
    name: 'Northern AgroVet',
    location: 'Gulu',
    doctors: [3],
    rating: 4.3,
  }
];

// Farmers and their Animals
export const DUMMY_FARMERS: Farmer[] = [
  {
    id: 'F001',
    name: 'Isaac Muwonge',
    phone: '+256 759 833 054',
    animals: [
      { id: 'A001', name: 'Bessie', type: Specialization.CATTLE, age: 3, notes: 'Vaccinated last 6 months' },
      { id: 'A002', name: 'Kato', type: Specialization.GOATS, age: 1, notes: 'No recent vaccinations' }
    ]
  },
  {
    id: 'F002',
    name: 'Grace Nakato',
    phone: '+256 781 445 221',
    animals: [
      { id: 'A003', name: 'Flock of 5', type: Specialization.POULTRY, age: 1, notes: 'Vaccination overdue' }
    ]
  },
  {
    id: 'F003',
    name: 'Peter Okello',
    phone: '+256 700 123 678',
    animals: [
      { id: 'A004', name: 'Pumba', type: Specialization.PIGS, age: 2, notes: 'Recent cough issue noted' }
    ]
  }
];

// Service Requests
export const DUMMY_REQUESTS: ServiceRequest[] = [
  {
    id: 'R001',
    farmerId: 'F001',
    animalId: 'A001',
    vetId: 1,
    status: RequestStatus.PENDING,
    description: 'Bessie the cow has a large wound on her leg and is limping.',
    serviceType: ServiceType.FARM_VISIT,
    timestamp: '2024-07-29T10:00:00Z'
  },
  {
    id: 'R002',
    farmerId: 'F002',
    animalId: 'A003',
    clinicId: 'C001',
    status: RequestStatus.PENDING,
    description: 'My chickens are lethargic and not eating. Need urgent advice.',
    serviceType: ServiceType.VIDEO_CONSULT,
    timestamp: '2024-07-29T11:30:00Z'
  },
  {
    id: 'R003',
    farmerId: 'F003',
    animalId: 'A004',
    vetId: 3,
    status: RequestStatus.ACCEPTED,
    description: 'Pumba the pig has a severe, persistent cough.',
    serviceType: ServiceType.FARM_VISIT,
    timestamp: '2024-07-28T18:00:00Z'
  },
   {
    id: 'R004',
    farmerId: 'F001',
    animalId: 'A002',
    vetId: 2,
    clinicId: 'C001',
    status: RequestStatus.COMPLETED,
    description: 'Goat deworming and general check-up.',
    serviceType: ServiceType.CLINIC_APPOINTMENT,
    timestamp: '2024-07-25T14:00:00Z'
  }
];

export const DUMMY_ADMIN_DATA: AdminData = {
    kpis: {
        farmers: 3,
        doctors: 3,
        clinics: 2,
        revenue: 2300000,
    },
    verifications: [
        { id: 'V001', name: 'Dr. Emily Achen', type: 'Doctor', status: 'Pending' },
        { id: 'V002', name: 'Jinja Livestock Vets', type: 'Clinic', status: 'Pending' },
    ]
};

export const MOCK_HEALTH_RECORDS: HealthRecord[] = [
    {
        id: 'HR001',
        animalName: 'Bessie',
        animalType: Specialization.CATTLE,
        date: '2024-05-10',
        service: 'Annual Vaccination',
        notes: 'Administered Clostridial 8-way and IBR-BVD vaccines. Animal in good condition.',
        vetId: 1,
    },
     {
        id: 'HR002',
        animalName: 'Kato',
        animalType: Specialization.GOATS,
        date: '2024-07-25',
        service: 'Deworming',
        notes: 'Oral drench administered. Completed at Mengo Vet Clinic.',
        vetId: 2,
    },
];