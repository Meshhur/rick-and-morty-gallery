import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button2 } from "../../components/buttons/btn2/Button2";
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
        <main>
            <header className="header">
                <img className="head-ph Rick-photo" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
                <h1 className="header-title">Welcome to rick and morty gallery</h1>
                <img className="head-ph Morty-photo" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />
            </header>
            <Button2 className="btn2" value="Log Out" onClick={logOut} />
        </main>
    );
};