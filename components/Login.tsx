import React from 'react';
import { StethoscopeIcon } from './icons/Icons';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex items-stretch justify-center min-h-screen bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
                <div className="inline-block p-3 bg-brand/20 rounded-full mb-4">
                    <StethoscopeIcon className="w-8 h-8 text-brand"/>
                </div>
            <h2 className="text-3xl font-extrabold text-text">Welcome to Televet</h2>
            <p className="mt-2 text-text-light">Click Sign In to start the prototype.</p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 bg-white placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm"
                    placeholder="Email address (e.g., farmer@test.com)"
                    defaultValue="farmer@test.com"
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 bg-white placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm"
                    placeholder="Password"
                    defaultValue="password123"
                />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm">
                <a href="#" className="font-medium text-brand hover:text-brand-dark">
                    Forgot your password?
                </a>
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-all"
                >
                Sign in
                </button>
            </div>
            </form>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1589922582949-c18721af44d3?q=80&w=1287&auto=format&fit=crop')"}}>
         <div className="w-full h-full bg-brand bg-opacity-30"></div>
      </div>
    </div>
  );
};

export default Login;