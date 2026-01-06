import Filtres from "../UI/Filtres";
import SortBy from "../UI/SortBy";

function SortFilter(props) {
    return (
        <section className="flex flex-row justify-between md:mx-10 mx-5">
            <SortBy sorting={props.sorting} />
            <Filtres filters={props.filters} />
        </section>
    )
}

export default SortFilter;