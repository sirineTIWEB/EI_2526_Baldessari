import SectionParallaxe from "../composants/SectionParallaxe";
import SectionRedirection from "../composants/SectionRedirection";
import separator from '../assets/illustrations/separator.png';
import Bouton from "../composants/UI/Bouton";
import { useNavigate } from "react-router-dom";
import oeuvreBall from '../assets/oeuvres/throwingballs.jpg';
import oeuvreKiss from '../assets/oeuvres/twokisses.png';
import oeuvreDuchamp from '../assets/oeuvres/doublevisionDuchamp.jpg';
import oeuvreHope from '../assets/oeuvres/primafacie_hopeless.jpg';
import logo from '../assets/logo/logo_horizontal.png';

function Accueil() {
    const navigate = useNavigate();

    return (
        <>
            <section className="mx-10 gap-10 h-[60vh] flex flex-col justify-center">
                <img src={logo} alt="logo baldessari" />
                <h1>Une exposition</h1>
            </section>
            <img src={separator} alt="" />
            {/* <SectionParallaxe /> */}
            <SectionRedirection />
            <div>
                <img src={separator} alt="separator" className="w-full h-auto object-cover mt-20"/>
            </div>
            <section className="relative flex flex-col justify-center items-center h-screen w-screen">
                <h1>découvrir</h1>
                <h1>son <span>UNIVERS</span></h1>
                <p className="w-2/3">Malgré sa formation initiale à la peinture, Baldessari choisit dans les années 1960 de relier et d’etudier la relation entre l’image et les mots, d’examiner et de défier notre perception de l’art.</p>
                <Bouton title="Parcourir le catalogue" onClick={() => navigate('/catalogue')} className="z-10 absolute bottom-[10%] right-[10%]"/>
                <img src={oeuvreBall} alt="" className="absolute z-5 bottom-0 left-[10%] h-[10vh] md:h-[20vh] object-contain"/>
                <img src={oeuvreKiss} alt="" className="absolute z-5 left-[10%] top-[5%] h-[15vh] md:h-[30vh] object-contain"/>
                <img src={oeuvreDuchamp} alt="" className="absolute z-5 bottom-0 right-[5%] h-[20vh]  md:h-[40vh] object-contain"/>
                <img src={oeuvreHope} alt="" className="absolute z-5 top-[15%] right-[15%] h-[10vh] md:h-[20vh] object-contain"/>
            </section>
        </>

    )

}

export default Accueil;