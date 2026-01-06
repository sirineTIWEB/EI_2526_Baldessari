import { useLoading } from "../../context/LoadingContext";
import Filtre from "./Filtre";

function Filtres(props) {
    const { activeFilter, setActiveFilter } = useLoading();

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