import Event from "./Event";
import { useLoading } from "../LoadingPage";

function Evenements(){
    const { events } = useLoading();

    return(
        <section className="md:mx-24 md:gap-10 flex flex-col">
            <h2>Événements liés</h2>
            {events.map((event, index) => (
                <Event  key={index} url={event.url} title={event.title} date={event.date} price={event.price} tag={event.tag} />
            ))}
        </section>

    )
}
export default Evenements;