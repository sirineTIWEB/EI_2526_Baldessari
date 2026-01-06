function Select(props) {

    return (
        <select
            value={props.value}
            onChange={props.onChange}
            className={`${props.className} uppercase font-semibold text-clamp-legend line-clamp-legend`}
        >
            <option value="" disabled>{props.placeholder}</option>
            {/*l'idée est que la quantité d'option soit dynamique donc si il existe des options, il les liste*/}
            {props.options && props.options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Select;