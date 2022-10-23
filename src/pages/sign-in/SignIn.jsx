import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import "./SignIn.css";

export const SignIn = () => {
    return (
        <main className="signIn">
            <h1 className="signIn-title">
                Sign in to Rick and Morty gallery
            </h1>
            <div className="signIn-card">
                <Input className="signIn-input inputbox" value="Username" />
                <Input className="signIn-input inputbox" value="Password" />
                <Button className="signIn-button btn" value="S i g n I n" />
            </div>
        </main >
    );
};