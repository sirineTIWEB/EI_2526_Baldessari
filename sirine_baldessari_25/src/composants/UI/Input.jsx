function Input(props) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={`border-2 border-black p-2.5 w-full md:w-1/2 ${props.className}`}
        />
    )
}

export default Input;