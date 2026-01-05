import Hero from '../UI/Hero'
import ImgUrl from '../../assets/illustrations/sittingJohn.png'

function PageInfo() {

    return (
        <Hero title="Votre visite" className="relative">
            <img src={ImgUrl} alt="John Baldessari" className='absolute right-[7%] md:right-[15%] md:h-96 h-32 -bottom-[90%] md:-bottom-[30%]'/>
        </Hero>
    )
}

export default PageInfo

