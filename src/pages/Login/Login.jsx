import { useRef, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../services/authApi";

export default function Login(){
    const[login, responseinfo] = useLoginMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login({email, password}).unwrap();
        }catch(error){

        }
    }

    console.log("success" + responseinfo)

    return (
        <div className="login">
            <div className="container">
                <div className="login_content">
                    <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>
                    <input type="email" name="email" placeholder="Email or phone number" onChange={() => setEmail(emailRef.current.value)} ref={emailRef}/>
                    <input type="password" name="password" placeholder="Password" onChange={() => setPassword(passwordRef.current.value)} ref={passwordRef}/>
                    <button type="submit" disabled={responseinfo.isLoading}>{responseinfo.isLoading ? 'Loading...' : 'Sign In'}</button>
                    <Link to="/register">
                        <span>New to Netflix? <b>Sign up now</b></span>
                    </Link>
                    <span>This page is protected by Google reCAPTCHA to ensure you're not bot. <b>Learn more.</b></span>
                    </form>
                </div>
            </div>
        </div>
    )
}