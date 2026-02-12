import React, { useState } from 'react';
import styles from './Login.module.css';

interface LoginProps {
    onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Normalizar: minúsculas y quitar tildes/espacios
        const normalized = password.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (normalized === 'musica') {
            onLogin();
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000); // Quitar error después de 2s
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.card}>
                <div className={styles.icon}>🔒</div>
                <h2 className={styles.title}>Solo una cosita mas...</h2>
                <p className={styles.question}>¿Qué es lo que más me apasiona en esta vida?</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="password" // O text si prefiere ver
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Escribe la respuesta..."
                        className={`${styles.input} ${error ? styles.inputError : ''}`}
                        autoFocus
                    />
                    {error && <p className={styles.errorMessage}>Mmm... piénsalo bien 😉</p>}

                    <button type="submit" className={styles.button}>
                        Entrar ❤️
                    </button>
                </form>
            </div>
        </div>
    );
}
