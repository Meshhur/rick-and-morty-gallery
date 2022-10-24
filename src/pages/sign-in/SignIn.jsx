import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons/btn1/Button";
import { Input } from "../../components/input/Input";
import { toast, Toaster } from "react-hot-toast";
import "./SignIn.css";

export const SignIn = () => {
    
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");

    const handleChangeUserName = event => setUserName(event.target.value);
    const handleChangeUserPass = event => setUserPass(event.target.value);
    
    const handleSubmit = () => {
        axios({
            method: "post",
            url: "http://localhost:3000/users",
            data: {
                username: userName,
                password: userPass
            }
        }).then(res => {
            localStorage.setItem('credentials', JSON.stringify(res.data));
            setTimeout(() => {
                navigate('/');
            },2200)
            toast.success('Successfully !')
        }).catch(error => {
            toast.error("Sign up failed")
            console.log(error);
        });
    }

    return (
        <main className="signIn">
            <Toaster />
            <h1 className="signIn-title">
                Sign in to Rick and Morty gallery
            </h1>
            <div className="signIn-card">
                <Input onChange={handleChangeUserName} inpValue={userName} className="signIn-input inputbox" value="Username" />
                <Input onChange={handleChangeUserPass} inpValue={userPass} type="password" className="signIn-input inputbox" value="Password" />
                <Button onClick={handleSubmit} className="signIn-button btn" value="S i g n I n" />
            </div>
        </main >
    );
};