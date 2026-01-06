import Event from "./Event";
import { useLoading } from "../../context/LoadingContext";
import SortFilter from "./SortFilter";

function Evenements(){
    const { events } = useLoading();

    
    const filters = [
    { label: 'Tous', value: '*' },
    { label: 'arts et films', value: '.tag-artsfilms' },
    { label: 'rencontres et débats', value: '.tag-rencontres' }
    ];

    const sorting = [
        { label: 'Date (plus récent)', value: 'date-desc' },
        { label: 'Date (plus ancien)', value: 'date-asc' },
        { label: 'A - Z', value: 'titre-asc' },
        { label: 'Z - A', value: 'titre-desc' }
    ];

    return(
        <section className="md:mx-24 gap-10 mx-12 flex flex-col mb-24">
            <h2>Événements liés</h2>
            <SortFilter filters={filters} sorting={sorting} />
            {events.map((event, index) => (
                <Event  key={index} url={event.url} title={event.title} date={event.date} price={event.price} tag={event.tag} tagUrl={event.tagUrl} />
            ))}
        </section>

    )
}
export default Evenements;