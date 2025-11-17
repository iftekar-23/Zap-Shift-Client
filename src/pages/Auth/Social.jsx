import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';


const Social = () => {

    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log("Google Login Success:", res.user);
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
