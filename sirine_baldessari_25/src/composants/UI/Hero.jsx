import Logo from '../../assets/logo/logo_horizontal.png'

function Hero(props) {

    return(
        <section className={`w-fit flex flex-col gap-2.5 md:gap-5 md:mx-24 mx-12 md:mt-32 mt-16 ${props.className}`}>
            <div>
                <img src={Logo} alt="Logo horizontal" className='h-full w-full object-contain'/>
            </div>
            <h1>{props.title}</h1>
            {props.children}
        </section>
    )
}

export default Hero