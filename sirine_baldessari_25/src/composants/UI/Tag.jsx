import { Link, useLocation } from "react-router-dom";

function Tag(props) {
    const location = useLocation();

    // Détermine la destination en fonction de la page actuelle
    // Si on vient d'une oeuvre ou du catalogue -> redirige vers /catalogue avec filtre
    // Sinon (événement ou page info) -> redirige vers /info avec filtre
    const isOeuvre = location.pathname.startsWith('/oeuvre') || location.pathname.startsWith('/catalogue');
    const destination = isOeuvre ? '/catalogue' : '/info';

    return (
        <Link
            to={`${destination}?filtre=${props.filtre}`}
            className={`py-1 border-b-2 border-black h-fit w-fit ${props.className}`}
        >
            <h3>{props.title}</h3>
        </Link>
    )
}

export default Tag;