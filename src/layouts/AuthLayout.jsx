import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Section */}
            <div className="flex flex-col px-10 justify-center">
                <div className="mb-10">
                    <Logo />
                </div>
                <Outlet />
            </div>

            {/* Right Section */}
            <div className="hidden md:flex bg-[#f7faef] justify-center items-center">
                <img src={authImg} alt="Auth" className="max-w-md" />
            </div>
        </div>
    );
};

export default AuthLayout;
