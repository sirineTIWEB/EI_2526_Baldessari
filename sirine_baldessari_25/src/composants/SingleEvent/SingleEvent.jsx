import { useParams } from "react-router-dom";
import { useLoading } from "../LoadingPage";

function SingleEvent() {
    // recup l'id de l'event cliqué depuis l'URL
    const { id } = useParams();

    // recup les événements depuis le Context
    const { events } = useLoading();

    // trouver l'événement correspondant à l'url
    const event = events.find(e => e.url === id);

    // si l'événement n'existe pas
    if (!event) {
        return <div>Événement non trouvé</div>;
    }

    return (
        <div>
            <h1>{event.title}</h1>
            <p>{event.date}</p>
            <p>{event.price}</p>
            <p>{event.description}</p>
            {event.langues && <p>Langues: {event.langues}</p>}
            <div>
                <h3>Tarifs:</h3>
                {event.tarifs.map((tarif, index) => (
                    <p key={index}>{tarif.type}: {tarif.prix}</p>
                ))}
            </div>
        </div>
    )
}

export default SingleEvent;
