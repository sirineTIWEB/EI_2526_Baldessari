import Hero from '../composants/UI/Hero'
import ImgUrl from '../assets/illustrations/sittingJohn.png'
import BannerAlert from '../composants/BannerAlert'
import InfoBlock from '../composants/UI/InfoBlock'
import Tarifs from '../composants/Tarifs'
import Evenements from '../composants/Evenements'

function PageInfo() {

    return (
        <>
            <Hero title="Votre visite" className="relative">
                <img src={ImgUrl} alt="John Baldessari" className='absolute right-0 md:right-[15%] md:h-96 h-32 -bottom-[30%] md:-bottom-[30%]' />
            </Hero>
            <BannerAlert message="BOZAR fermera exceptionnellement à 16 heures la veille de  Noël et la veille du Nouvel An, et seront fermés le jour de Noël et le  jour de l’An." />

            <section className='md:mx-24 mx-12 md:my-24 my-12 flex md:flex-row flex-col md:gap-0 gap-8 justify-between'>
                <InfoBlock title="Horaire">
                    <p>Mardi à Dimanche</p>
                    <p>10:00 à 18:00</p>
                </InfoBlock>
                <InfoBlock title="Lieu">
                    <p>BOZAR/Palais des Beaux-Arts</p>
                    <p>Rue Ravenstein 23, 1000 Bruxelles</p>
                </InfoBlock>
            </section>
            <Tarifs />
            <Evenements />
        </>
    )
}

export default PageInfo

