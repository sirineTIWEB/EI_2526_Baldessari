import { Link } from "react-router-dom";

function Tag(props){
    return(
        // déclarer plus haut 
        <Link to={`/info?tag=${props.filtre}`} className="py-1 border-b-2 border-black h-fit">
            <h3 className="text-nowrap">{props.title}</h3>
        </Link>
    )
}

export default Tag;