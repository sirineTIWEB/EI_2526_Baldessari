function Input(props) {
    return (
        <>
            <label className="font-extrabold text-clamp-body line-clamp-body">{props.label}
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    className={`font-normal text-clamp-Tbody line-clamp-Tbody border-b-2 border-black p-2.5 w-full ${props.className}`}
                />
            </label>
        </>

    )
}

export default Input;