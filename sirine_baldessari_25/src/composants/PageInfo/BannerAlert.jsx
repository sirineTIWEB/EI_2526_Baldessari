function BannerAlert(props) {

    return (
        <div className="w-screen h-fit bg-mypink py-2.5 md:pl-24 pl-12 md:pr-12 pr-6 flex items-center">
            <p>{props.message}</p>
        </div>
    )
}

export default BannerAlert;