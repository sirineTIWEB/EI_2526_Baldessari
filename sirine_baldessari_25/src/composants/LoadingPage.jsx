import { useState, useEffect, createContext, useContext } from "react";
import jsonData from "../assets/data/oeuvres.json";
import eventsData from "../assets/data/events.json";
import { useLocation } from "react-router-dom";

// utilisation de useContext pour une portée globale au lieu de répéter à chaque enfant.
const LoadingContext = createContext();

// personnalisation d'un hook pour sécurité et clarté.
export function useLoading() {
    // clarté au lieu de useCont.. partout.
    const context = useContext(LoadingContext);

    // la sécurité ici
    if (!context) {
        throw new Error('useLoading must be used within LoadingPage');
    }
    return context;
}

function LoadingPage({ children }) {
    // loading 1fois pour une portée globale de DB peintures
    const [data, setData] = useState([]);
    // loading 1fois pour une portée globale des événements
    const [events, setEvents] = useState([]);

    // sert à différencier loadingpage ou index
    const [isLoading, setIsLoading] = useState(true);

    // celui sert à l'initiation seulement
    const [initialLoad, setInitialLoad] = useState(true);
    const location = useLocation();

    // fonctions qui va pouvoir etre déclenché dans d'autres composants.
    const startLoading = () => {
        setIsLoading(true);
    };
    const stopLoading = () => {
        setIsLoading(false);
    };

    // s'exécute que pour l'initialisation
    useEffect(() => {
        if (initialLoad) {
            setData(jsonData);
            setEvents(eventsData);
            setIsLoading(false);
            setInitialLoad(false);
        }
    }, [initialLoad]);

    // pour la navigation entre pages
    useEffect(() => {
        if (!initialLoad) {
            startLoading();
            stopLoading();
        }
        // surveille changement de page
    }, [location.pathname]);

    

    return (
        // provider pour le tenue globale des états
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading, data, events }}>
            {isLoading ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                children
            )}
        </LoadingContext.Provider>
    );
}

export default LoadingPage;
