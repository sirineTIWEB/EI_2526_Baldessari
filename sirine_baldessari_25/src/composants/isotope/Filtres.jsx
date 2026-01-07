import { useLoading } from "../../context/LoadingContext";
import Filtre from "../UI/Filtre";

function Filtres(props) {
    // Utiliser les props si fournis, sinon utiliser le contexte
    const context = useLoading();
    const activeFilter = props.activeFilter !== undefined ? props.activeFilter : context.activeFilter;
    const setActiveFilter = props.setActiveFilter || context.setActiveFilter;

    return (
        <section className="md:mx-24 mx-12 my-12 flex gap-4">
            {props.filters && props.filters.map((filter) => (
                <Filtre
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={` ${
                        activeFilter === filter.value ? 'border-mypink text-mypink' : 'border-black'
                    }`}
                    title={filter.label}
                />
            ))}
        </section>
    )
}

export default Filtres;