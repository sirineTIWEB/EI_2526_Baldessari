import Event from "./Event";
import { useLoading } from "../../context/LoadingContext";

function Evenements(){
    const { events } = useLoading();

    return(
        <section className="md:mx-24 gap-10 mx-12 flex flex-col mb-24">
            <h2>Événements liés</h2>
            {events.map((event, index) => (
                <Event  key={index} url={event.url} title={event.title} date={event.date} price={event.price} tag={event.tag} tagUrl={event.tagUrl} />
            ))}
        </section>

    )
}
export default Evenements;