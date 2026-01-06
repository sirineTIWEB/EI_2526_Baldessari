import {Link} from "react-router-dom";

function Oeuvre(props){

    return (
        <Link to={`/oeuvre/${props.url}`} className={`p-10 flex flex-col gap-5 items-center ${props.tag} grid-item tag-${props.tagUrl}`}>
            <img src={props.image} alt={props.title} />
            <p className="uppercase">{props.title}</p>
        </Link>
    )

}

export default Oeuvre;