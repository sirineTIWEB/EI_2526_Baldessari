import { useParams } from "react-router-dom";

function SingleEvent() {
    // recup l'id de l'event cliqué depuis l'URL
    const { id } = useParams();

    return (
        <div>
            <h1>Event: {id}</h1>
            <p>hihi</p>
            {/* recuper la description de l'event */}

            <p></p>
        </div>
    )
}

export default SingleEvent;
