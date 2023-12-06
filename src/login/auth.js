import api from "../services/api"
const login = async (email, password, onError, loading, navigate) => {

    if ([email, password].includes("")) {
        return onError()
    }
    loading(true)
    const payload = {
        email: email,
        password: password
    }
    try {
        const { data } = await api.post("/accounts/login", payload)
        sessionStorage.setItem('apiToken', `Bearer ${data.jwt}`)
        loading(false)
        return window.location.href = '/quick_stock/products';

    } catch (error) {
        sessionStorage.setItem('apiToken', "")
        loading(false)
        return onError()
    }
}
export { login }