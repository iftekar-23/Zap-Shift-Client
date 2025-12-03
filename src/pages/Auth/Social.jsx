import React from 'react';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Social = () => {

    const { googleLogin } = useAuth();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                

                // create user in the database
                const userInfo = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    photoURL: result.user.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        console.log('user data has been stored', res.data)
                        navigate(location.state || '/');
                    })

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
