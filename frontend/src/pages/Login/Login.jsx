import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input"
import "./Login.css";

export default function Login() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    function handleNext(e) {
        e.preventDefault();

        if (!email) {
            setError("Informe seu e-mail");
            return;
        }

        setError("");
        setStep(2);
    }

    function handleLogin(e) {
        e.preventDefault();

        if (!password) {
            setError("Informe sua senha");
            return;
        }

        setError("");
        login(email);
        navigate("/plans");
    }

    function handleBack() {
        if (step === 1) {
            navigate("/");
        } else {
            setStep(1);
            setError("");
        }
    }

    return (
        <div className="login-container">
            <header className="login-header">
                <button className="back-btn" onClick={handleBack}>
                    ←
                </button>
                <span>Login</span>
                <button className="help-btn">?</button>
            </header>

            {step === 1 && (
                <>
                    <h1>Qual é seu e-mail?</h1>

                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError("");
                        }}
                    />

                    {error && <span className="error">{error}</span>}

                    <button className="primary-btn" onClick={handleNext}>
                        Continuar
                    </button>
                </>
            )}

            {step === 2 && (
                <>
                    <h1>Sua senha</h1>

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError("");
                        }}
                    />

                    {error && <span className="error">{error}</span>}

                    <a href="#" className="forgot-password">
                        Esqueci minha senha
                    </a>

                    <button className="primary-btn" onClick={handleLogin}>
                        Continuar
                    </button>
                </>
            )}
        </div>
    );
}
