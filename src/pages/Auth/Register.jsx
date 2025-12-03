import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Social from './Social';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();

    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure();

    const handleRegistration = (data) => {

        console.log('after register', data.photo[0]);
        const profileImg = data.photo[0];

        console.log(data)
        registerUser(data.email, data.password)
            .then(res => {
                console.log(res.user)

                // 1. store the image in form data
                const formData = new FormData();
                formData.append('image', profileImg);

                const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_Key}`

                axios.post(image_API_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;
                        // create user in database
                        const userInfo = {
                            email: data.email,
                            displayName: data.name,
                            photoURL: photoURL
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database');
                                }
                            })

                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }

                        updateUserProfile(userProfile)
                            .then(() => {
                                console.log('user profile updated done.')
                                navigate(location.state || '/');
                            })
                            .catch(error => console.log(error))
                    })

            })
            .then(err => console.log(err))
    }

    return (
        <div className="max-w-sm w-full">

            {/* Title */}
            <h1 className="text-4xl font-bold">Create An Account</h1>
            <p className="text-gray-500 mb-6">Register with ZapShift</p>

            {/* Form */}
            <div className="card bg-base-100 w-full shadow-none p-0">
                <form onSubmit={handleSubmit(handleRegistration)} className="space-y-3">

                    {/* name */}
                    <label className="label">Name</label> <br />
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        className="input input-bordered"
                        placeholder="Your name"
                    /> <br />
                    <label className="label">Photo</label> <br />
                    <input
                        type="file"
                        {...register('photo', { required: true })}
                        className="file-input"
                        placeholder="Your photo"
                    /> <br />

                    {/* Email */}
                    <label className="label">Email</label> <br />
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="input input-bordered"
                        placeholder="Email"
                    />
                    {errors.email && (
                        <p className='text-red-600 text-sm'>Email is required</p>
                    )}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        })}
                        className="input input-bordered"
                        placeholder="Password"
                    />

                    {errors.password?.type === 'required' && (
                        <p className='text-red-500 text-sm'>Password is required</p>
                    )}

                    {errors.password?.type === 'pattern' && (
                        <p className='text-red-500 text-sm'>
                            Password must be at least 6 characters and contain upper, lower, number & special char
                        </p>
                    )}

                    {/* Forgot Password */}
                    <div><a className="link link-hover text-sm">Forgot password?</a></div>

                    {/* Login Button */}
                    <button className="btn bg-primary border-none w-full mt-2">Login</button>
                </form>
            </div>

            {/* Register */}
            <p className="mt-3 text-sm">
                Already have an account?{" "}
                <Link state={location.state} to="/login" className="text-primary font-semibold">Login</Link>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <Social />

        </div>
    );
};

export default Register;