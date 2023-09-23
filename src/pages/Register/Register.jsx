import { useRef, useState } from "react";
import "./Register.scss";

export default function Register(){
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
        <div className="register">
            <div className="container">
                <div className="top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                    <button>Sign in</button>
                </div>
                <div className="register_content">
                    <h1>Unlimited movies, Tv shows and more</h1>
                    <h3>Watch anywhere, cancel anytime</h3>
                    <p>Enter your email to create or restart your membership</p>
                        {
                            !email ? (
                                <div className="input">
                                    <input type="email" placeholder="Email address" ref={emailRef} />
                                    <button onClick={handleGetStart}>Get Started</button>
                                </div>
                            ) : 
                                <form className="input">
                                <input type="password" placeholder="Password" ref={passwordRef} />
                                <button onClick={handleFinish}>Get Started</button>
                                </form>
                        }
                </div>
            </div>
        </div>
    )
}