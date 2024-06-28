import { createContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const createUser = async (email, password) => {
        const response = await fetch('http://localhost:8000/api/account/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            setUser(data.user);
            localStorage.setItem('authTokens', JSON.stringify(data.tokens));
            navigate('/');
        } else {
            throw new Error(data.message);
        }
    };

    const login = async (email, password) => {
        const response = await fetch('http://localhost:8000/api/account/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            setUser(data.user);
            localStorage.setItem('authTokens', JSON.stringify(data.tokens));
            navigate('/');
        } else {
            throw new Error(data.message);
        }
    };

    const logOut = useCallback(() => {
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    }, [navigate]);

    const updateUserInfo = async (updateInfo) => {
        const response = await fetch('http://localhost:8000/api/account/my-profile/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
            },
            body: JSON.stringify(updateInfo)
        });
        const data = await response.json();
        if (response.ok) {
            setUser(data.user);
        } else {
            throw new Error(data.message);
        }
    };

    const removeUser = async () => {
        const response = await fetch('http://localhost:8000/api/account/$(id)', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
            }
        });
        if (response.ok) {
            setUser(null);
            localStorage.removeItem('authTokens');
            navigate('/login');
        } else {
            const data = await response.json();
            throw new Error(data.message);
        }
    };

    useEffect(() => {
        const tokens = localStorage.getItem('authTokens');
        if (tokens) {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8000/api/account/profile/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${JSON.parse(tokens).access}`
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setUser(data.user);
                } else {
                    logOut();
                }
                setLoading(false);
            };
            fetchData();
        } else {
            setLoading(false);
        }
    }, [logOut]);

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserInfo,
        removeUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
