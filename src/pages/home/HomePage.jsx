import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const credentials = localStorage.getItem('credentials');
        if (!credentials) {
            navigate('/sign-in')
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem('credentials');
        navigate('/sign-in');
    }

    return (
        <div>
            HomePage
            <button onClick={logOut}>Log out</button>
        </div>
    );
};