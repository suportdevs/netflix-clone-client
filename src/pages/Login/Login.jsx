import { useRef, useState } from "react";
import "./Login.scss";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleGetStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="login">
            <div className="container">
                <div className="login_content">
                    <form action="">
                    <h1>Sign In</h1>
                    <input type="email" name="email" placeholder="Email or phone number"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <button>Sign In</button>
                    <span>New to Netflix? <b>Sign up now</b></span>
                    <span>This page is protected by Google reCAPTCHA to ensure you're not bot. <b>Learn more.</b></span>
                    </form>
                </div>
            </div>
        </div>
    )
}