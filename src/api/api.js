const host = 'http://127.0.0.1:8000';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options)
        // host + url = full address


        if (response.ok !== true) {
            const error = await response.json()
            const message = error.detail
            throw new Error(message)
        }
        
        return response.json()

    } catch (error) {
        return error
    }
}

function createOptions(method = 'get', data) {

    const options = {
        method,
        headers: {
                    'Access-Control-Allow-Origin': 'https://marvelous-dusk-809212.netlify.app/', 
                    'Access-Control-Allow-Methods': "POST, GET, PUT, DELETE", 
                    'Access-Control-Allow-Headers': "Content-Type", 
                    'Origin': 'https://marvelous-dusk-809212.netlify.app/'},
    }

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    const userData = JSON.parse(localStorage.getItem('userData')) || {}
    if (Object.keys(userData).length > 0) {
        options.headers['Authorization'] = `Bearer ${userData.access_token}`
    }

    return options
}

export async function get(url) {
    return request(url, createOptions())
}

export async function post(url, data) {
    return request(url, createOptions('post', data))
}

export async function put(url, data) {
    return request(url, createOptions('put', data))
}

export async function del(url) {
    return request(url, createOptions('delete'))
}

export async function login(email, password) {
    const result = await post('/auth/login', {email, password})
    return result
}

export async function register(email, password, phoneNumber) {
    const result = await post('/auth/register', {email, password, phone_number:phoneNumber})
    return result
}

export async function logout() {
    await post('/auth/logout')
}