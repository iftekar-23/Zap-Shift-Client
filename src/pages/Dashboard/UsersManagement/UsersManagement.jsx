
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaUserShield } from 'react-icons/fa';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure();
    const [searchText, setSearchText] = useState('');

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
            return res.data;
        }
    });

    const handleMakeAdmin = (user) => {
        const roleInfo = { role: 'admin' };
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} is now an Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
    };

    const handleRemoveAdmin = (user) => {
        const roleInfo = { role: 'user' };
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} removed from Admin role`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-wide text-gray-800">
                    User Management <span className="text-gray-500 text-xl">({users.length})</span>
                </h2>

                <div className="relative w-full max-w-sm">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="search"
                        placeholder="Search users..."
                        className="input input-bordered w-full pl-10 rounded-xl border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                    <svg
                        className="h-5 w-5 absolute left-3 top-3 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="none" stroke="currentColor">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-200">
                <table className="table table-zebra w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Others</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className="hover:bg-gray-50 transition">
                                <td className="font-medium">{index + 1}</td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-10 w-10">
                                                <img src={user.photoURL} alt="User Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">{user.displayName}</div>
                                            <div className="text-xs text-gray-400">Member</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="text-gray-600">{user.email}</td>
                                <td className="font-semibold capitalize text-blue-600">{user.role}</td>

                                <td>
                                    {user.role === 'admin' ? (
                                        <button
                                            onClick={() => handleRemoveAdmin(user)}
                                            className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
                                        >
                                            <FiShieldOff className="text-lg" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-sm bg-green-500 hover:bg-green-600 text-white rounded-lg shadow"
                                        >
                                            <FaUserShield className="text-lg" />
                                        </button>
                                    )}
                                </td>

                                <td>
                                    <button className="btn btn-sm rounded-lg border-gray-300">More</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersManagement;