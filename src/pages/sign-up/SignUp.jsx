import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/buttons/btn1/Button";
import { Input } from "../../components/input/Input";
import { toast, Toaster } from "react-hot-toast";
import "./SignUp.css";

export const SignUp = () => {
    
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
        </main >
    );
};