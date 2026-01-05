function InfoBlock(props) {
    return (
        <div className="flex flex-col gap-4 md:gap-10">
            <h2>{props.title}</h2>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}

export default InfoBlock;