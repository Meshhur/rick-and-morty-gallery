import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button2 } from "../../components/buttons/btn2/Button2";
import "./HomePage.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

export const HomePage = observer(() => {
    const {users} = useContext(Context)
    const navigate = useNavigate();
    useEffect(() => {
        const credentials = localStorage.getItem('credentials');
        if (!credentials) {
            navigate('/sign-in')
        }
    }, [])
    console.log(users.users);
    const logOut = () => {
        localStorage.removeItem('credentials');
        navigate('/sign-up');
    }
    const currentDate = new Date().getFullYear()
    return (
        <main className="main">
            <header className="header">
                <div className="head-content container">
                    <img className="head-ph Rick-photo" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
                    <h1 className="head-title">Welcome to rick and morty gallery</h1>
                    <img className="head-ph Morty-photo" src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty" />
                </div>
            </header>
            <div className="wrap container">
                <div className="about">
                    <p className="about-txt">
                        Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer.
                        The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into high jinks.
                    </p>
                    <p className="about-txt">
                        Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of Rick and Morty's family. The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its originality, creativity, and humor. They have been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. They've also received two Annie Awards. The series has several times been the most viewed television comedy of adults. The popularity of Rick and Morty has made it a billion-dollar merchandising and media franchise.
                    </p>
                    <Link to="/characters" className="all-characters">
                        Click here to see all characters
                    </Link>
                </div>
                <div className="signUp_and_signIn">
                    <Button2 className="btn2" value="Log Out" onClick={logOut} />
                </div>
            </div>
            <footer className="footer">
                <div className="container f-content">
                    <span className="follow">Follow me in:</span>
                    <div className="accounts">
                        <br />
                        <a target="_blank" href="https://github.com/Meshhur">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                        </a>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100072421579465">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        <a target="_blank" href="https://www.instagram.com/atageldiyevmeshhur/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </a>
                    </div>
                    <span className="created">
                        created by <a target="_blank" className="author" href="https://github.com/Meshhur">Meshhur</a> {currentDate}
                    </span>
                </div>
            </footer>
        </main>
    );
});