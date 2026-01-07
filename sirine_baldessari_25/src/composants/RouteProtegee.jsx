import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RouteProtegee({ children }) {
    const { user } = useAuth();

    if (!user) {
        // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
        return <Navigate to="/login" />;
    }

    // Affiche les enfants (composants protégés) si l'utilisateur est authentifié
    return children;
}

export default RouteProtegee;