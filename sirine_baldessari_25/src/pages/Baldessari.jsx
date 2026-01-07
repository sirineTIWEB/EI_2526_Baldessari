import dogtrophy from '../assets/illustrations/americanArts.png';
import ArmLegs from '../assets/illustrations/ArmsLegs.png';
import California from '../assets/illustrations/california.png';
import Addams from '../assets/illustrations/charlesAddams.png';
import dove from '../assets/illustrations/dove.png';
import earsofa from '../assets/illustrations/earSofa.png';
import baldessari from '../assets/illustrations/john_headshot.jpg';
import liondor from '../assets/illustrations/liondor.png';
import nez from '../assets/illustrations/noseSonces.png';
import PainBrush from '../assets/illustrations/paintBrush.svg';
import titre from '../assets/illustrations/titre.png';
import JohnDown from '../assets/illustrations/john_down.png';
import charleText from '../assets/illustrations/charles_txt.png';
import ObjectifText from '../assets/illustrations/txt_objectif.png';
import PeintureText from '../assets/illustrations/txt_peinture.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function Baldessari() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animation parallaxe pour le plan 3 (arrière-plan) - vitesse très lente
        gsap.to('.plan3', {
            y: 400,
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
            }
        });

        // Animation parallaxe pour le plan 2 (images intermédiaires) - vitesse moyenne
        gsap.to('.plan2-img', {
            y: -250,
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.2,
            }
        });

        // Animation parallaxe pour les textes du plan 2 - vitesse rapide
        gsap.to('.plan2-text', {
            y: -350,
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.6,
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="parallax-container h-screen md:h-[250vh] relative w-screen bg-mygreen overflow-hidden">
            {/* Plan 3 - Arrière-plan (le plus lent) */}
            <img src={PainBrush} alt="Coup de pinceau" className='plan3 absolute top-0 z-0' />

            {/* Plan 2 - Images intermédiaires */}
            <img src={California} alt="california" className='plan2-img absolute top-0 z-10' />
            <img src={baldessari} alt="John Baldessari" className='plan2-img absolute top-0 z-10' />
            <img src={dove} alt="Dove" className='plan2-img absolute top-0 z-10' />
            <img src={earsofa} alt="Ear Sofa" className='plan2-img absolute top-0 z-10' />
            <img src={nez} alt="Nez" className='plan2-img absolute top-0 z-10' />
            <img src={dogtrophy} alt="Dog Trophy" className='plan2-img absolute top-0 z-10' />
            <img src={Addams} alt="Charles Addams" className='plan2-img absolute top-0 z-10' />
            <img src={liondor} alt="Lion Dor" className='plan2-img absolute top-0 z-10' />

            {/* Plan 2 */}
            <img src={charleText} alt="texte Charles Addams" className='plan2-text absolute top-0 z-11' />
            <img src={ObjectifText} alt="texte Objectif" className='plan2-text absolute top-0 z-11' />
            <img src={PeintureText} alt="texte Peinture" className='plan2-text absolute top-0 z-11' />
            <img src={ArmLegs} alt="Arms Legs" className='plan2-img absolute top-0 z-12' />

            {/* Plan 1 - Premier plan (fixes/pinnés) */}
            <img src={titre} alt="Titre" className='absolute top-0 z-30' />
            <img src={JohnDown} alt="John Baldessari" className='absolute top-0 z-30' />
        </section>
    )
}
export default Baldessari;