import {
    createContext,
    useContext,
    useEffect,
    useState,
    useLayoutEffect,
 } from "react";


 import authRoutes from './routes/authRoutes.js'


 const AuthContext = createContext(undefined)


 export const useAuth = ()=> {
    const authContext = useContext(AuthContext)

    if(!authContext) {
        throw new Error('useAuth must be used within a AuthProvider')
    }

    return authContext;
 }

 const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();

    useEffect(() => {
        const fetchMe = async ()=> {
            try {
                const response = await authRoutes.get('/api/me');
                setToken(response.data.accessToken)
            } catch {
                setToken(null)
            }
        };

        fetchMe()
    }, [])
 }


 useLayoutEffect(()=> {
    const authInterceptor = authRoutes.interceptors.request.use((config)=> {
        config.headers.Authorization =
        !config._retry && token
        ? `Bearer ${token}`
        : config.headers.Authorization;
        return config;
    })

    return () => {
        api.interceptors.request.eject(authInterceptor)
    }
 }, [token])


 useLayoutEffect(()=> {
    const refreshInterceptor = api.interceptors.response.use(
        (response) => response,
    )
 })
