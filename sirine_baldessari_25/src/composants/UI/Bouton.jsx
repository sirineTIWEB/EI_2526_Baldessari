function Bouton(props) {

    return (
        <button disabled={props.disabled} type={props.type} onClick={props.onClick} className={`cursor-pointer bg-mygreen rounded-full px-5 py-2 hover:rotate-6 hover:transition-transform hover:duration-300 ${props.className}`}>
            <h6>{props.title}</h6></button>
    )
}

export default Bouton;