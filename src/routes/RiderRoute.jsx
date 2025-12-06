import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../components/LoadingSpinner';
import Forbidden from '../components/Forbidden/Forbidden';

const RiderRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (role !== 'rider') {
        return <Forbidden></Forbidden>
    }

    return children;
};

export default RiderRoute;