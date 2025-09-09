import React from 'react';

// FIX: Add style property to IconProps to allow passing inline styles to icons.
interface IconProps {
    className?: string;
    style?: React.CSSProperties;
}

export const StethoscopeIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935m-16.945 7.065A10.002 10.002 0 0012 21a10.002 10.002 0 008.945-9.935" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const VideoIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const ClinicIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "w-5 h-5 text-gray-400", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.008h-.008v-.008Z" />
    </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 21Z" />
    </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
);

export const UserCircleIcon: React.FC<IconProps> = ({ className = "w-6 h-6", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const PaperclipIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3.375 3.375 0 1 1 18.374 9.5l-7.693 7.693a2.25 2.25 0 0 1-3.182-3.182l5.474-5.474m-1.512 15.152L18.375 12.739" />
    </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
);


// Role Icons
export const FarmerIcon: React.FC<IconProps> = ({ className = "w-8 h-8", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a1 1 0 0 0-2 0c0 .6.4 1 1 1h2a1 1 0 0 0 1-1c0-2.2-1.8-4-4-4s-4 1.8-4 4a1 1 0 0 0-2 0c0-3.3 2.7-6 6-6s6 2.7 6 6a1 1 0 0 0-1 1h-2zM9.4 4.6A2 2 0 1 0 12 6a2 2 0 0 0-2.6-1.4z"/><path d="M6 8a2 2 0 0 0-2 2v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H6z"/></svg>;
export const VetIcon: React.FC<IconProps> = ({ className = "w-8 h-8", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4zM9 12h6"/><path d="M12 9v6"/></svg>;
export const AdminIcon: React.FC<IconProps> = ({ className = "w-8 h-8", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/><path d="M12 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>;
export const RevenueIcon: React.FC<IconProps> = ({ className = "w-8 h-8", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16v-4m0-4h.01"/><path d="M12 8V7"/></svg>;


// Specialization Icons
export const CattleIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.5 6C19.9 6 21 7.1 21 8.5V17a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3.5a2.5 2.5 0 0 0-5 0V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8.5C4 7.1 5.1 6 6.5 6h12zM5 15h14"/><path d="M12 6.5L14 3"/><path d="M12 6.5L10 3"/></svg>;
export const PoultryIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.71 12.16a2.1 2.1 0 0 0-1.18-3.54 2.09 2.09 0 0 0-2.34-1.26 2.09 2.09 0 0 0-2.34 1.26A2.1 2.1 0 0 0 9.29 8.62a2.1 2.1 0 0 0-1.18 3.54.5.5 0 0 1 0 .68 2.1 2.1 0 0 0 1.18 3.54 2.09 2.09 0 0 0 2.34 1.26c.88 0 1.7-.53 2.09-1.3l.11-.2a2.09 2.09 0 0 0 2.34-1.26 2.1 2.1 0 0 0 1.18-3.54.5.5 0 0 1 0-.68Z"/><path d="M12 2v4"/><path d="m17 3-1.6 1.4"/><path d="m7 3 1.6 1.4"/></svg>;
export const GoatIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0V5z"/><path d="M13 12a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2z"/><path d="M18.2 12.5a.2.2 0 0 0 .2.2c.2 0 .4-.2.4-.4v-1.6a.4.4 0 0 0-.4-.4h-2.4a.4.4 0 0 0-.4.4v3.2c0 .2.2.4.4.4h.4a.2.2 0 0 0 .2-.2V13c0-.6.4-1 1-1s1 .4 1 1v-.5z"/><path d="M14 16.5c-2 0-3.4-1.2-4.1-2.5"/><path d="M4.2 11.2c.1.6.4 1.2.8 1.8"/><path d="M12 21a9 9 0 0 0 9-9c0-4.2-3-7.8-7-8.8"/><path d="M12 3a9 9 0 0 0-9 9c0 1.8.5 3.5 1.4 4.9"/></svg>;
export const PetIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 12.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Z"/><path d="M12 4a6 6 0 0 0-6 6v0a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v0a6 6 0 0 0-6-6Z"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M12 2v2"/><path d="M4 12H2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="m17.7 4.9-1.4 1.4"/><path d="m4.9 17.7 1.4-1.4"/></svg>;
export const EquineIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a2 2 0 0 0 2-2V18h-4v2a2 2 0 0 0 2 2Z"/><path d="M9 18V8.5c0-.8.5-1.6 1.3-1.8l.2-.1c.3-.1.6 0 .8.2c.3.2.4.5.4.9v2"/><path d="M15 18V8.5c0-.8-.5-1.6-1.3-1.8l-.2-.1c-.3-.1-.6 0-.8.2c-.3.2-.4.5-.4.9v2"/><path d="M12 11c-2.3 0-4.3-1.3-5.3-3.3C6.3 7 6.2 6.1 6.5 5.3c.3-.8.9-1.4 1.7-1.7C9 3.2 10 3 11.1 3.2c1.7.3 3.2 1.5 4.1 3c.9 1.5 1 3.2.3 4.8"/><path d="M5 20a5 5 0 0 0 5-5h4a5 5 0 0 0 5 5"/></svg>;
export const PigsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", style }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 12.2a4 4 0 0 1 2.6 3.4"/><path d="M11 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h2a2 2 0 0 0 2-2Z"/><path d="M16 6a2 2 0 1 0-4 0c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2c0-2.8-2.2-5-5-5s-5 2.2-5 5c0 .4 0 .8.2 1.2"/><path d="M5 18v2"/><path d="M9 18v2"/></svg>;