import { Link } from "react-router-dom";
import Tag from "../UI/Tag";

function Event(props) {

    return (
        // au lieu de a href , utilisez link permet de pas recharger la page
        <article className="flex border-t-2 border-black">
            <Link to={`/event/${props.url}`} className="flex cursor-pointer md:p-5 md:gap-24">
                <h5 className="w-1/3">{props.title}</h5>
                <p>{props.date}</p>
                <p>{props.price}</p>

            </Link>
            {/* retirer tag de link car il peut pas y avoir un lien dans un lien */}
            <Tag title={props.tag} filtre={props.tagUrl} />
        </article>
    )
}

export default Event;