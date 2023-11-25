import { Navigate, useParams, Outlet } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { PropertyContext } from '../../contexts/PropertyContext';


export const OwnerRoute = () => {
    const { propertyId } = useParams()
    const { myProperties } = useContext(PropertyContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if myProperties is empty and if not, set loading to false
        if (myProperties.length > 0) {
            setLoading(false);
        }
    }, [myProperties]);

    const isOwner = myProperties.some(prop => prop.id == propertyId);

    if (loading) {
        // Optionally, you can render a loading state here
        return <p>Loading...</p>;
    }

    if (!isOwner) {
        return <Navigate to="/unauthorized" />;
    }

    return <Outlet />;
};
