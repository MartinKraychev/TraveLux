import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllProperties() {
    return api.get('/properties')
}

export async function createProperty(data) {
    return api.post('/properties', data)
}

export async function getMyProperties() {
    return api.get('/properties/my-properties')
}

export async function getPropertyById(id) {
    return api.get(`/properties/${id}`)
}

export async function editProperty(id, data) {
    return api.put(`/properties/${id}/edit`, data)
}

export async function deleteProperty(id) {
    return api.del(`/properties/${id}/delete`)
}

export async function getPropertyPhotos() {
    return api.get('/properties/photos')
}

export async function canRate(data) {
    return api.post(`/rate/check-rating`, data)
}

export async function rateProperty(property_id, data) {
    return api.post(`/rate/${property_id}`, data)
}




