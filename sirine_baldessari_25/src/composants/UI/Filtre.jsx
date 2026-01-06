function Filtre(props) {
    return (
        <button
            onClick={props.onClick}
            className={`py-1 border-b-2 h-fit w-fit ${props.className}`}
        >
            <h3>{props.title}</h3>
        </button>
    )
}

export default Filtre;
