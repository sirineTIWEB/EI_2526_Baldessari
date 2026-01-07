import Input from './UI/Input'
import Bouton from './UI/Bouton'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, login, logout } = useAuth(); // Gestion utilisateur via le contexte d'authentification
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!username || !password) {
            setError('Veuillez remplir tous les champs');
            setLoading(false);
            return;
        }

        // Vérifier les identifiants
        if (username === "Prof" && password === "#Prof2026") {
            login(username); // Connecter l'utilisateur avec son nom
            setLoading(false);
            navigate('/Dashboard'); // Rediriger vers la page d'accueil
        } else {
            setError('Identifiants incorrects');
            setLoading(false);
        }

    };

    const handleLogout = () => {
        logout();
        navigate('/Admin'); // Rediriger vers la page de connexion après déconnexion

    };

    return (
        <div>
            {!user ? (
                <form onSubmit={handleSubmit} className="gap-7 flex flex-col w-full">
                    <Input label="Utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" required />

                    <Input label="Mot de passe" value={password} type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

                    {error && <h3 className="text-red-500">{error}</h3>}
                    <Bouton type="submit" disabled={loading} title={loading ? 'Connexion...' : 'Se connecter'} />
                </form>
            ) : (
                <div>
                    <Bouton onClick={handleLogout} title="Se déconnecter" className="subscribe-btn" />
                </div>
            )}
        </div>
    )
}

export default LogIn