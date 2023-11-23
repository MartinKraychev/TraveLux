import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext"; 
import { createProperty, editProperty, deleteProperty, getMyProperties, getAllProperties  } from "../api/data";

export const PropertyContext = createContext()

export const PropertyProvider = ({ children }) => {
    const navigate = useNavigate()
    const [properties, setProperties] = useState([])
    const [myProperties, setMyProperties] = useState([])
    const {isAuthenticated} = useContext(AuthContext)

    useEffect(() => {
        getAllProperties()
            .then(props => setProperties(props))
    }, [])

    useEffect(() => {
        if (isAuthenticated) {
            getMyProperties()
                .then(props => setMyProperties(props))
        }
    }, [isAuthenticated])

    const createHandler = (data) => {
        createProperty(data)
            .then((property) => {
                setProperties(props => [...props, property])
                setMyProperties(props => [...props, property])
                navigate('/catalog')
            })
    }

    const editHandler = (propertyId, data) => {
        editProperty(propertyId, data)
            .then((property) => {
                setProperties(oldProperties => oldProperties.map(p => p.id == propertyId ? property : p))
                setMyProperties(oldProperties => oldProperties.map(p => p.id == propertyId ? property : p))
                navigate(`/catalog/${propertyId}`)
            })
    }

    const deleteHandler = (propertyId) => {
        deleteProperty(propertyId)
            .then(() => {
                setProperties(oldProperties => oldProperties.filter(prop => prop.id != propertyId))
                setMyProperties(oldProperties => oldProperties.filter(prop => prop.id != propertyId))
                navigate("/catalog")
            })
    }


    return (
        <PropertyContext.Provider value={{properties, myProperties, createHandler, editHandler, deleteHandler}}>
            {children}
        </PropertyContext.Provider>
    )
}
