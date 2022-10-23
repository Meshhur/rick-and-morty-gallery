import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import "./SignIn.css";

export const SignIn = () => {
    return (
        <main className="sign-in">
            <div className="sign-in-card">
                <Input className="sign-in-username inputbox" value="Username"/>
                <Input className="sign-in-userpassword inputbox" value="Password"/>
                <Button className="sign-in-button btn" value="S i g n I n" />
            </div>
        </main>
    );
};