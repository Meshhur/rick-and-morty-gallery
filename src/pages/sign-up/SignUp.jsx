import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons/btn1/Button";
import { Input } from "../../components/input/Input";
import { toast, Toaster } from "react-hot-toast";
import "./SignUp.css";
import { Context } from "../../index.js";
import { observer } from "mobx-react-lite";

export const SignUp = observer(() => {
    const { users } = useContext(Context)
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");

    const handleChangeUserName = event => setUserName(event.target.value);
    const handleChangeUserPass = event => setUserPass(event.target.value);
    const handleSubmit = () => {
        try {
            const newUser = { username: userName, password: userPass }
            users.setUsers(newUser)
            console.log(users.users);

            toast.success('Successfully !')
            setTimeout(() => {
                navigate('/');
            }, 2200)
            localStorage.setItem('credentials', JSON.stringify(newUser));
            navigate("/characters")
        } catch (error) {
            toast.error("Sign up failed")
            console.log(error);
        }
    }

    return (
        <main className="signUp">
            <Toaster />
            <h1 className="signUp-title">
                Sign up to Rick and Morty gallery
            </h1>
            <div className="signUp-card">
                <Input onChange={handleChangeUserName} inpValue={userName} className="signUp-input inputbox" value="Username" />
                <Input onChange={handleChangeUserPass} inpValue={userPass} type="password" className="signUp-input inputbox" value="Password" />
                <Button onClick={handleSubmit} className="signUp-button btn" value="S i g n U p" />
            </div>

            <div>
                Already have an account?
                <Link style={{color:"white"}} to={'/sign-in'}>Sign In</Link>
            </div>
        </main >
    );
});