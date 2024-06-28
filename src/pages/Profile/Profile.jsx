import { useContext, useEffect, useState, useCallback } from 'react';
import AuthContext from '../context/AuthContext';

const Profile = () => {
    const { authTokens, logoutUser } = useContext(AuthContext);
    const [profile, setProfile] = useState([]);

    const getProfile = useCallback(async () => {
        let response = await fetch('http://127.0.0.1:8000/api/account/profile/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        });
        let data = await response.json();

        if (response.status === 200) {
            setProfile(data);
        } else if (response.statusText === 'Unauthorized') {
            logoutUser();
        }
    }, [authTokens, logoutUser]);

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    return (
        <div>
            <p>You are logged in to the Homepage!</p>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default Profile;
