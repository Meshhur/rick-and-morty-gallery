import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons/btn1/Button";
import { Input } from "../../components/input/Input";
import { toast, Toaster } from "react-hot-toast";
import "./SignIn.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index.js";

export const SignIn = observer(() => {
    const {users} = useContext(Context)
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    console.log(users.users);
    const handleChangeUserName = event => setUserName(event.target.value);
    const handleChangeUserPass = event => setUserPass(event.target.value);
    const handleSubmit = () => {
            const user = users.users.find(u => u.username === userName)
            console.log(user);
            if (user) {
                toast.success('Successfully !')
                setTimeout(() => {
                    navigate('/');
                }, 2200)
                localStorage.setItem('credentials', JSON.stringify(user));
                navigate("/")
            }
    }

    return (
        <div className="signUp">
            <Toaster />
            <h1 className="signUp-title">
                Sign in to Rick and Morty gallery
            </h1>
            <div className="signUp-card">
                <Input onChange={handleChangeUserName} inpValue={userName} className="signUp-input inputbox" value="Username" />
                <Input onChange={handleChangeUserPass} inpValue={userPass} type="password" className="signUp-input inputbox" value="Password" />
                <Button onClick={handleSubmit} className="signUp-button btn" value="S i g n I n" />
            </div>
            <div>
                Do not have an account yet?
                <Link style={{ color: "white" }} to={'/sign-up'}>Sign up</Link>
            </div>
        </div >
    );
});