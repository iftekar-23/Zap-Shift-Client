import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { auth } from '../../../Firebase/Firebase.config';

const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut(auth)
            .then()
            .catch(err => console.log(err));
    };

    const links = (
        <>
            <li><NavLink to="">Services</NavLink></li>
            <li><NavLink to="">About Us</NavLink></li>
            <li><NavLink to="/coverage">Coverage</NavLink></li>
            {/* Mobile Auth Buttons */}
            <div className="lg:hidden mt-2 flex flex-col gap-2">
                {user ? (
                    <button onClick={handleLogOut} className="btn btn-sm btn-outline w-full">Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-sm btn-outline w-full">Login</Link>
                )}
                <Link to="/rider" className="btn btn-sm btn-primary text-black w-full">Be a Rider</Link>
            </div>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm px-2">
            {/* Left Section */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost text-xl">
                    <Logo />
                </Link>
            </div>

            {/* Center Section */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            {/* Right Section (Desktop Only) */}
            <div className="navbar-end hidden lg:flex">
                {user ? (
                    <button onClick={handleLogOut} className="btn">Logout</button>
                ) : (
                    <Link className="btn" to="/login">Login</Link>
                )}

                <Link className="btn btn-primary text-black mx-3" to="/rider">
                    Be a Rider
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
