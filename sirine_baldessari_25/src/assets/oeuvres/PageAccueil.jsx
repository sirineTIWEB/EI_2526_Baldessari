import SectionParallaxe from "../composants/SectionParallaxe";
import SectionRedirection from "../composants/SectionRedirection";
import separator from '../assets/illustrations/separator.png';
import Bouton from "../composants/UI/Bouton";
import { useNavigate } from "react-router-dom";
import oeuvre1 from '../assets/peintures/throwingballs.jpg';
import oeuvre2 from '../assets/peintures/twokisses.png';
import oeuvre3 from '../assets/peintures/doublevisionDuchamp.jpg';
import oeuvre4 from '../assets/peintures/primafacie_hopeless.jpg';

function Accueil() {
    const navigate = useNavigate();

    return (
        <>
            <section className="md:gap-10">
                <img src={logo} alt="logo baldessari" />
                <h1>Une exposition</h1>
            </section>
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
            </section>
        </>

    )

}

export default Accueil;