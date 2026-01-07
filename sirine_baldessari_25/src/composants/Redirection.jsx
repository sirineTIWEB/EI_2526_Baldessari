import Bouton from "./UI/Bouton";

function Redirection(props) {
    return(
        <article className="flex flex-col md:gap-16 md:my-5 my-1 w-full md:w-1/3 items-center text-center">
            <p>{props.body}</p>
            <Bouton title={props.boutonTitle} type="button" onClick={props.onClick} />
        </article>
    )
}

export default Redirection;