import { useNavigate } from 'react-router-dom'
import { useState, useEffect, createContext } from "react";

import { createProperty, editProperty, deleteProperty, getAllProperties  } from "../api/data";

export const PropertyContext = createContext()

export const PropertyProvider = ({ children }) => {
    const navigate = useNavigate()
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getAllProperties()
            .then(props => setProperties(props))
    }, [])

    const createHandler = (data) => {
        createProperty(data)
            .then((property) => {
                setProperties(props => [...props, property])
                navigate('/catalog')
            })
    }

    const editHandler = (propertyId, data) => {
        editProperty(propertyId, data)
            .then((property) => {
                setProperties(oldProperties => oldProperties.map(p => p.id === propertyId ? property : p))
                navigate(`/catalog/${propertyId}`)
            })
    }

    const deleteHandler = (propertyId) => {
        deleteProperty(propertyId)
            .then(() => {
                setProperties(oldProperties => oldProperties.filter(prop => prop.id !== propertyId))
                navigate("/catalog")
            })
    }

    const refreshDetails = () => {
        getAllProperties()
            .then(props => setProperties(props))
    }


    return (
        <PropertyContext.Provider value={{properties, createHandler, editHandler, deleteHandler, refreshDetails}}>
            {children}
        </PropertyContext.Provider>
    )
}
