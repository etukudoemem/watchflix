import { createContext } from "react"

const toastContext = createContext(null)

export const ToastProvider = ({ children }) => {

    const toastValues = {}
    return <toastContext.Provider value={toastValues}>
        {children}
    </toastContext.Provider>
}