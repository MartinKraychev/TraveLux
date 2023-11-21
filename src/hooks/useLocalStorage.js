import { useState } from "react"

export const UseLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key)
        return storedData !== 'undefined' && storedData !== '' ? storedData : defaultValue
    })

    const setLocalStorage = (newValue) => {
        localStorage.setItem(key, newValue)
        setValue(newValue)
    }

    return [
        value, setLocalStorage
    ]

}