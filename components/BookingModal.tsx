import React, { useState, useEffect, useRef } from 'react';
import { Vet, ServiceType, Animal } from '../types';
import { CloseIcon, CarIcon, ShieldCheckIcon, CreditCardIcon } from './icons/Icons';

// Let TypeScript know that L is a global object from the Leaflet script
declare const L: any;

interface BookingModalProps {
  vet: Vet;
  serviceType: ServiceType;
  animal: Animal;
  onClose: () => void;
  onSubmit: () => void;
}

const TrackingMap: React.FC<{ vet: Vet }> = ({ vet }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            // Hardcoded farm location for demo
            const farmLocation: [number, number] = [0.3136, 32.5811];
            const vetLocation: [number, number] = [vet.location.lat, vet.location.lng];
            
            const map = L.map(mapContainerRef.current, {
                zoomControl: false, scrollWheelZoom: false, dragging: false, attributionControl: false,
            }).setView(farmLocation, 13);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            L.polyline([farmLocation, vetLocation], {color: '#6B7280', dashArray: '5, 10'}).addTo(map);
            L.marker(vetLocation).addTo(map).bindPopup("Vet's Location");
            L.marker(farmLocation).addTo(map).bindPopup("Your Farm");
            mapRef.current = map;
        }
    }, [vet.location]);

    return (
        <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
            <div ref={mapContainerRef} className="w-full h-full z-0" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-transparent z-10 pointer-events-none">
                 <CarIcon className="w-8 h-8 text-text absolute top-0 animate-road-trip" style={{ transform: 'translateY(-50%)' }} />
            </div>
        </div>
    );
};


const BookingModal: React.FC<BookingModalProps> = ({ vet, serviceType, animal, onClose, onSubmit }) => {
  const [description, setDescription] = useState('');
  const [bookingState, setBookingState] = useState<'form' | 'payment' | 'submitted' | 'tracking'>('form');

  useEffect(() => {
    if (bookingState === 'submitted') {
      const timer = setTimeout(() => {
        if (serviceType === ServiceType.FARM_VISIT) {
            setBookingState('tracking');
        } else {
            onSubmit(); // For other service types, just submit
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [bookingState, serviceType, onSubmit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingState('payment');
  };

  const handlePayment = () => {
    console.log(`Payment processed for ${serviceType} with ${vet.name}.`);
    setBookingState('submitted');
  };
  
  const renderContent = () => {
    switch (bookingState) {
        case 'form':
            return (
                 <form onSubmit={handleSubmit}>
                    <p className="text-text-light mb-1">Vet: <span className="font-semibold text-text">{vet.name}</span></p>
                    <p className="text-text-light mb-4">For: <span className="font-semibold text-text">{animal.name} ({animal.type})</span></p>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Describe the issue
                        </label>
                        <textarea
                        id="description"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:outline-none bg-white text-black"
                        placeholder={`E.g., My ${animal.type.toLowerCase()} has been coughing...`}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-semibold">
                        Cancel
                        </button>
                        <button type="submit" className="px-6 py-2 bg-brand text-white rounded-md hover:bg-brand-dark font-semibold">
                        Proceed to Payment
                        </button>
                    </div>
                </form>
            );
        case 'payment':
            return (
                <div className="animate-fade-in-up text-center">
                    <div className="bg-panel p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-lg text-text">Service Summary</h4>
                        <div className="mt-2 text-left space-y-1 text-sm text-text-light">
                            <p><strong>Vet:</strong> {vet.name}</p>
                            <p><strong>Service:</strong> {serviceType}</p>
                            <p><strong>Patient:</strong> {animal.name} ({animal.type})</p>
                            <p><strong>Estimated Cost:</strong> <span className="font-bold text-text">UGX 85,000</span></p>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-success font-semibold bg-green-50 p-3 rounded-lg">
                        <ShieldCheckIcon />
                        <span>Your payment is protected by Televet Escrow.</span>
                    </div>
                    <p className="text-xs text-muted mt-2">Funds are released after you confirm service completion.</p>
                     <div className="mt-6 flex flex-col items-center">
                        <button 
                            onClick={handlePayment} 
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-brand text-white rounded-md hover:bg-brand-dark font-semibold text-lg"
                        >
                            <CreditCardIcon />
                            Pay with Mobile Money
                        </button>
                        <button type="button" onClick={() => setBookingState('form')} className="mt-2 text-sm text-muted hover:text-text">
                            Go Back
                        </button>
                    </div>
                </div>
            )
        case 'submitted':
            return (
                 <div className="text-center p-8 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-success mb-2">Payment Successful!</h3>
                    <p className="text-text-light">{vet.name} has been notified. You will receive a confirmation shortly.</p>
                </div>
            );
        case 'tracking':
            return (
                <div className="text-center p-6 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-text mb-2">{vet.name} is on the way!</h3>
                    <p className="text-text-light mb-4">Estimated arrival in <span className="font-bold">15 minutes</span>.</p>
                    <TrackingMap vet={vet} />
                    <button onClick={onSubmit} className="mt-6 w-full px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark">
                        Continue
                    </button>
                </div>
            )
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-auto transform transition-all animate-fade-in-up">
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-text">Request {serviceType}</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <CloseIcon />
                </button>
            </div>
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;