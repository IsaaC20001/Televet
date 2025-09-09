import React, { useState, useMemo, useCallback } from 'react';
import { Vet, Specialization, ServiceRequest, RequestStatus, Animal, ServiceType, ChatMessage } from '../../types';
import { DUMMY_VETS, DUMMY_FARMERS, DUMMY_REQUESTS } from '../../data';
import Header from '../shared/Header';
import MapView from '../MapView';
import VetCard from '../VetCard';
import BookingModal from '../BookingModal';
import RatingModal from '../shared/RatingModal';
import ChatWindow from '../shared/ChatWindow';
import { SearchIcon, PlusIcon, CattleIcon, PoultryIcon, GoatIcon, PetIcon, EquineIcon, PigsIcon } from '../icons/Icons';
import { UserRole } from '../../types';

interface FarmerDashboardProps {
  onLogout: () => void;
}

const specializationIcons: Record<Specialization, React.ReactElement> = {
    [Specialization.CATTLE]: <CattleIcon className="w-8 h-8" />,
    [Specialization.POULTRY]: <PoultryIcon className="w-8 h-8" />,
    [Specialization.GOATS]: <GoatIcon className="w-8 h-8" />,
    [Specialization.PETS]: <PetIcon className="w-8 h-8" />,
    [Specialization.EQUINE]: <EquineIcon className="w-8 h-8" />,
    [Specialization.PIGS]: <PigsIcon className="w-8 h-8" />,
};

const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ onLogout }) => {
  const [filter, setFilter] = useState<Specialization | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  
  const [selectedVet, setSelectedVet] = useState<Vet | null>(null);
  const [bookingService, setBookingService] = useState<{vet: Vet, serviceType: ServiceType, animal: Animal} | null>(null);
  const [activeRequest, setActiveRequest] = useState<ServiceRequest | null>(DUMMY_REQUESTS.find(r => r.id === 'R003') || null);
  const [showRatingModalForVet, setShowRatingModalForVet] = useState<Vet | null>(null);
  const [showChat, setShowChat] = useState(false);

  const farmer = DUMMY_FARMERS[0]; // Simulate logged in as Isaac Muwonge

  const handleSelectVet = useCallback((vet: Vet) => {
    setSelectedVet(vet);
    // In a real app, you'd scroll to the profile or open a modal.
    // For this prototype, we'll just log it.
    console.log("Selected vet:", vet.name);
  }, []);

  const handleBookNow = (vet: Vet, animal: Animal) => {
    // For simplicity, we'll default to Farm Visit
    setBookingService({vet, serviceType: ServiceType.FARM_VISIT, animal});
  };

  const handleBookingSubmit = () => {
    if(bookingService) {
        // Simulate request submission
        const newRequest: ServiceRequest = {
            id: `R${Date.now()}`,
            farmerId: farmer.id,
            animalId: bookingService.animal.id,
            vetId: bookingService.vet.id,
            status: RequestStatus.EN_ROUTE, // Jump straight to tracking for demo
            description: "New service request",
            serviceType: bookingService.serviceType,
            timestamp: new Date().toISOString(),
        };
        setActiveRequest(newRequest);
        setBookingService(null);
    }
  };

  const handleCompleteService = () => {
    if(activeRequest) {
        const vet = DUMMY_VETS.find(v => v.id === activeRequest.vetId);
        if (vet) {
            setShowRatingModalForVet(vet);
        }
        setActiveRequest(null);
    }
  };
  
  const filteredVets = useMemo(() => {
    return DUMMY_VETS.filter(vet => {
      const matchesFilter = filter === 'All' || vet.specializations.includes(filter);
      const matchesSearch = vet.name.toLowerCase().includes(searchTerm.toLowerCase()) || vet.clinicName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAvailability = !showAvailableOnly || vet.isAvailable;
      return matchesFilter && matchesSearch && matchesAvailability;
    });
  }, [filter, searchTerm, showAvailableOnly]);

  return (
    <div>
      <Header onLogout={onLogout} role={UserRole.FARMER} userName={farmer.name} />
      
      {bookingService && <BookingModal vet={bookingService.vet} serviceType={bookingService.serviceType} animal={bookingService.animal} onClose={() => setBookingService(null)} onSubmit={handleBookingSubmit} />}
      {showRatingModalForVet && <RatingModal vet={showRatingModalForVet} onClose={() => setShowRatingModalForVet(null)} onSubmit={() => setShowRatingModalForVet(null)} />}
      {showChat && activeRequest && (
        <ChatWindow 
            onClose={() => setShowChat(false)} 
            participantName={DUMMY_VETS.find(v => v.id === activeRequest.vetId)?.name || 'Vet'}
            initialMessages={[
                {sender: 'vet', text: 'Hello Isaac, this is Dr. Sarah. Please share a photo of the cow\'s wound if you can.', timestamp: '10:01 AM'},
                {sender: 'farmer', text: 'Thank you Doctor, sending it now.', timestamp: '10:02 AM'}
            ]}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Animal Profiles Section */}
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Your Animals</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {farmer.animals.map(animal => (
                    <div key={animal.id} className="bg-white p-4 rounded-lg shadow-soft text-center">
                        <div className="bg-panel text-brand rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                            {specializationIcons[animal.type]}
                        </div>
                        <h3 className="mt-2 font-bold text-text">{animal.name}</h3>
                        <p className="text-sm text-text-light">{animal.type}</p>
                        {selectedVet && <button onClick={() => handleBookNow(selectedVet, animal)} className="mt-2 w-full text-xs text-center px-2 py-1 bg-brand text-white font-semibold rounded-md hover:bg-brand-dark">Book for {animal.name}</button>}
                    </div>
                ))}
                 <button className="bg-white p-4 rounded-lg shadow-soft text-center flex flex-col items-center justify-center border-2 border-dashed hover:border-brand text-muted hover:text-brand transition">
                    <PlusIcon />
                    <span className="mt-2 text-sm font-semibold">Add Animal</span>
                 </button>
            </div>
        </div>

        {/* Active Request Card */}
        {activeRequest && (
            <div className="bg-white rounded-lg shadow-lift p-4 mb-6 animate-fade-in-up border-l-4 border-brand">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                        <h3 className="font-bold text-lg text-text">Active Request: {DUMMY_VETS.find(v=>v.id === activeRequest.vetId)?.name} is on the way!</h3>
                        <p className="text-sm text-text-light">For your {DUMMY_FARMERS[0].animals.find(a => a.id === activeRequest.animalId)?.type} "{DUMMY_FARMERS[0].animals.find(a => a.id === activeRequest.animalId)?.name}"</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setShowChat(true)} className="px-4 py-2 bg-accent text-white rounded-md hover:bg-blue-700 font-semibold text-sm">Chat with Vet</button>
                        <button onClick={handleCompleteService} className="px-4 py-2 bg-success text-white rounded-md hover:bg-green-700 font-semibold text-sm">Service Complete & Pay</button>
                    </div>
                </div>
            </div>
        )}

        {/* Search and Vet List Section */}
        <div className="bg-white rounded-md shadow-soft p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-2 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon />
                    </div>
                    <input
                    type="text"
                    placeholder="Search by vet or clinic name..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:outline-none bg-white text-black"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:outline-none bg-white text-black"
                    value={filter}
                    onChange={e => setFilter(e.target.value as Specialization | 'All')}
                >
                    <option value="All">All Specializations</option>
                    {Object.values(Specialization).map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                    ))}
                </select>
            </div>
            <div className="mt-4">
                <label className="flex items-center space-x-2 cursor-pointer text-sm text-text-light">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded-sm border-gray-300 text-brand focus:ring-brand"
                        checked={showAvailableOnly}
                        onChange={e => setShowAvailableOnly(e.target.checked)}
                    />
                    <span>Show available vets only</span>
                </label>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-[600px] bg-white rounded-lg shadow-soft overflow-hidden">
            <MapView vets={filteredVets} onSelectVet={handleSelectVet} />
            </div>
            <div className="lg:col-span-1 h-[600px] overflow-y-auto bg-transparent pr-2 space-y-4">
            {filteredVets.length > 0 ? (
                filteredVets.map(vet => (
                <VetCard key={vet.id} vet={vet} onSelectVet={handleSelectVet} />
                ))
            ) : (
                <div className="text-center text-gray-500 py-10 bg-white rounded-md shadow-soft">
                <p className="font-semibold">No vets found</p>
                <p className="text-sm">Try adjusting your search or filter.</p>
                </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;