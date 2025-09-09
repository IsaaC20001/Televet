import React from 'react';
import { Vet } from '../types';
// FIX: Import `PigsIcon` to be used for the 'Pigs' specialization.
import { StarIcon, CattleIcon, PoultryIcon, GoatIcon, PetIcon, EquineIcon, PigsIcon } from './icons/Icons';
import { Specialization } from '../types';

interface VetCardProps {
  vet: Vet;
  onSelectVet: (vet: Vet) => void;
}

// FIX: Add the missing `Specialization.PIGS` to the `specializationIcons` record to satisfy the TypeScript type definition.
const specializationIcons: Record<Specialization, React.ReactElement> = {
    [Specialization.CATTLE]: <CattleIcon className="w-4 h-4" />,
    [Specialization.POULTRY]: <PoultryIcon className="w-4 h-4" />,
    [Specialization.GOATS]: <GoatIcon className="w-4 h-4" />,
    [Specialization.PIGS]: <PigsIcon className="w-4 h-4" />,
    [Specialization.PETS]: <PetIcon className="w-4 h-4" />,
    [Specialization.EQUINE]: <EquineIcon className="w-4 h-4" />,
};


const VetCard: React.FC<VetCardProps> = ({ vet, onSelectVet }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-4 hover:shadow-lift hover:border-brand transition-all cursor-pointer" onClick={() => onSelectVet(vet)}>
      <img src={vet.imageUrl} alt={vet.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-white shadow-md" />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-lg font-bold text-text">{vet.name}</h3>
                <p className="text-sm text-text-light -mt-1">{vet.clinicName}</p>
            </div>
            <div className={`text-xs font-semibold px-2 py-1 rounded-full ${vet.isAvailable ? 'bg-green-100 text-success' : 'bg-gray-100 text-muted'}`}>
                {vet.isAvailable ? 'Available' : 'Offline'}
            </div>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center text-yellow-500">
            <StarIcon />
            <span className="ml-1 text-gray-700 font-semibold">{vet.rating.toFixed(1)}</span>
          </div>
          <span className="text-text-light text-sm">({vet.reviews} reviews)</span>
        </div>
        
        <div className="mt-3 border-t pt-2 flex flex-wrap gap-2">
            {vet.specializations.map(spec => (
                <div key={spec} className="flex items-center gap-1.5 text-xs bg-gray-100 text-text-light px-2 py-1 rounded-full">
                    {specializationIcons[spec]}
                    <span>{spec}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VetCard;