import { createContext, useState, useContext } from 'react';

// 1. Créer le contexte (le "conteneur" de données partagées)
const AuthContext = createContext(null);

// 2. Fournisseur du contexte (enveloppe l'app pour partager les données)
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData); // Stocke les informations de l'utilisateur
    };

    const logout = () => {
        setUser(null); // Supprime les informations de l'utilisateur
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// 3. Hook personnalisé pour accéder facilement au contexte
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
    }
    return context;
}