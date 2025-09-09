import React, { useState } from 'react';
import { UserRole, ServiceRequest, RequestStatus, Vet } from '../../types';
import Header from '../shared/Header';
import DataTable from '../shared/DataTable';
import { DUMMY_CLINICS, DUMMY_REQUESTS, DUMMY_FARMERS, DUMMY_VETS } from '../../data';

interface ClinicDashboardProps {
  onLogout: () => void;
}

const AssignDoctorModal: React.FC<{ doctors: Vet[], onRequest: ServiceRequest, onClose: () => void, onAssign: (reqId: string, vetId: number) => void }> = ({ doctors, onRequest, onClose, onAssign }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm animate-fade-in-up">
                <div className="p-6">
                    <h3 className="font-bold text-lg text-text mb-4">Assign Doctor</h3>
                    <div className="space-y-2">
                        {doctors.map(doc => (
                            <button key={doc.id} onClick={() => onAssign(onRequest.id, doc.id)} className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-panel">
                                <img src={doc.imageUrl} className="w-10 h-10 rounded-full" alt={doc.name} />
                                <div>
                                    <p className="font-semibold text-text">{doc.name}</p>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${doc.isAvailable ? 'bg-green-100 text-success' : 'bg-gray-100 text-muted'}`}>
                                        {doc.isAvailable ? 'Available' : 'Busy'}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                    <button onClick={onClose} className="w-full mt-4 text-sm text-muted hover:text-text">Cancel</button>
                </div>
            </div>
        </div>
    )
}

const ClinicDashboard: React.FC<ClinicDashboardProps> = ({ onLogout }) => {
  const clinic = DUMMY_CLINICS[0]; // Simulate logged in as Mengo Vet Clinic
  const [requests, setRequests] = useState<ServiceRequest[]>(DUMMY_REQUESTS.filter(r => r.clinicId === clinic.id));
  const [assigningRequest, setAssigningRequest] = useState<ServiceRequest | null>(null);

  const clinicDoctors = DUMMY_VETS.filter(v => clinic.doctors.includes(v.id));

  const handleAssignDoctor = (requestId: string, vetId: number) => {
      setRequests(prev => prev.map(r => r.id === requestId ? { ...r, status: RequestStatus.ASSIGNED, vetId: vetId } : r));
      console.log(`Assigned request ${requestId} to vet ${vetId}`);
      setAssigningRequest(null);
  }

  const renderRequestRow = (request: ServiceRequest) => {
    const farmer = DUMMY_FARMERS.find(f => f.id === request.farmerId);
    const animal = farmer?.animals.find(a => a.id === request.animalId);
    const assignedVet = DUMMY_VETS.find(v => v.id === request.vetId);

    return (
      <tr key={request.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-text">{farmer?.name}</div>
          <div className="text-sm text-text-light">{animal?.name} ({animal?.type})</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-text-light max-w-xs truncate">{request.description}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            request.status === RequestStatus.PENDING ? 'bg-yellow-100 text-yellow-800' : 
            request.status === RequestStatus.ASSIGNED ? 'bg-blue-100 text-accent' :
            'bg-gray-100 text-muted'
          }`}>
            {request.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
            {assignedVet ? (
                <div className="flex items-center gap-2">
                    <img src={assignedVet.imageUrl} className="w-6 h-6 rounded-full" />
                    <span>{assignedVet.name}</span>
                </div>
            ) : (
                <span className="text-text-light">-</span>
            )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          {request.status === RequestStatus.PENDING && (
            <button onClick={() => setAssigningRequest(request)} className="text-brand hover:text-brand-dark font-semibold">Assign Doctor</button>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Header onLogout={onLogout} role={UserRole.CLINIC} userName={clinic.name} />
      {assigningRequest && <AssignDoctorModal doctors={clinicDoctors} onRequest={assigningRequest} onClose={() => setAssigningRequest(null)} onAssign={handleAssignDoctor} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="mb-8">
            <h1 className="text-2xl font-bold text-text">Clinic Dashboard</h1>
            <p className="text-text-light">Manage incoming requests and assign them to your doctors.</p>
        </div>
        
        <DataTable
          headers={['Farmer & Animal', 'Issue Description', 'Status', 'Assigned Doctor', '']}
          data={requests}
          renderRow={renderRequestRow}
        />
      </div>
    </div>
  );
};

export default ClinicDashboard;