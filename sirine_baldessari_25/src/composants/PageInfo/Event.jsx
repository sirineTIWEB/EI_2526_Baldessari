import { Link } from "react-router-dom";
import Tag from "../UI/Tag";

function Event(props) {

    return (
        // au lieu de a href , utilisez link permet de pas recharger la page
        
        <Link to={`/event/${props.url}`} className="flex border-t-2 border-black md:p-5 cursor-pointer md:gap-24">
            <h5 className="w-1/3">{props.title}</h5>
            <p>{props.date}</p>
            <p>{props.price}</p>
            <Tag title={props.tag} />
        </Link>
    )
}

export default Event;