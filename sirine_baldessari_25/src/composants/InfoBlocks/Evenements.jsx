import { useState } from "react";
import Event from "./Event";
import { useLoading } from "../../context/LoadingContext";
import SortFilter from "./SortFilter";

function Evenements(){
    const { events } = useLoading();
    const [activeFilter, setActiveFilter] = useState('*');
    const [sortBy, setSortBy] = useState('');


    const filters = [
        { label: 'Tous', value: '*' },
        { label: 'arts et films', value: 'arts-et-films' },
        { label: 'rencontres et débats', value: 'rencontres-et-debats' }
    ];

    const sorting = [
        { label: 'Date (plus récent)', value: 'date-desc' },
        { label: 'Date (plus ancien)', value: 'date-asc' },
        { label: 'A - Z', value: 'titre-asc' },
        { label: 'Z - A', value: 'titre-desc' }
    ];

    // Filtrer les événements
    let filteredEvents = events;
    if (activeFilter !== '*') {
        filteredEvents = events.filter(event => event.tagUrl === activeFilter);
    }

    // Trier les événements
    if (sortBy) {
        filteredEvents = [...filteredEvents].sort((a, b) => {
            if (sortBy === 'date-desc') {
                return new Date(b.date) - new Date(a.date);
            } else if (sortBy === 'date-asc') {
                return new Date(a.date) - new Date(b.date);
            } else if (sortBy === 'titre-asc') {
                return a.title.localeCompare(b.title);
            } else if (sortBy === 'titre-desc') {
                return b.title.localeCompare(a.title);
            }
            return 0;
        });
    }

    return(
        <section className="md:mx-24 gap-10 mx-12 flex flex-col mb-24">
            <h2>Événements liés</h2>
            <SortFilter
                filters={filters}
                sorting={sorting}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            {filteredEvents.map((event, index) => (
                <Event  key={index} url={event.url} title={event.title} date={event.date} price={event.price} tag={event.tag} tagUrl={event.tagUrl} />
            ))}
        </section>

    )
}
export default Evenements;