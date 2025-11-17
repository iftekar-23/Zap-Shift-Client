import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';


const Social = () => {

    const { googleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log("Google Login Success:", res.user);
                navigate(location?.state || '/')
            })
            .catch(err => {
                console.error("Google Login Error:", err);
            });
    };

    return (
        <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn w-full flex items-center gap-2"
        >
            <FcGoogle size={22} /> Login with Google
        </button>
    );
};

export default Social;
