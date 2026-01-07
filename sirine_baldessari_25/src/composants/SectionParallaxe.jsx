import fondparallaxe from '../assets/illustrations/introparallaxe/fond_parallaxe.png';
import peopleparallaxe from '../assets/illustrations/introparallaxe/people_parallaxe.png';
import textparallaxe from '../assets/illustrations/introparallaxe/texte-parallaxe.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function SectionParallaxe() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // DÉTECTION RESPONSIVE
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const isTabletPortrait = isTablet && window.innerHeight > window.innerWidth;

        // VALEURS ADAPTATIVES SELON LA TAILLE D'ÉCRAN
        // Scale values
        const peopleScale = isMobile ? 3 : (isTablet ? 4 : 5);
        const texteScale = isMobile ? 1.3 : (isTablet ? 1.5 : 1.65);
        const fondScale = isMobile ? 1.1 : 1.2;

        // Scroll duration - iPad portrait a besoin de plus de scroll
        const scrollDuration = isMobile ? "+=450%" : (isTabletPortrait ? "+=600%" : (isTablet ? "+=400%" : "+=500%"));

        // Animation durations
        const peopleDuration = isMobile ? 10 : 12;
        const texteDuration = isMobile ? 6 : 8;
        const fondDuration = isMobile ? 8 : 10;
        const fondExitDuration = isMobile ? 7 : (isTabletPortrait ? 9 : 8);
        const peopleExitDuration = isMobile ? 6 : (isTabletPortrait ? 7 : 6);

        // Mouvement horizontal initial (Phase 1)
        const initialXMove = isMobile ? "0%" : "-10%";

        // Exit distances - iPad portrait a besoin de distances plus grandes
        const fondExitX = isMobile ? "-160%" : (isTabletPortrait ? "-170%" : "-150%");
        const peopleExitX = isMobile ? "-200%" : (isTabletPortrait ? "-220%" : "-180%");

        // Timeline: ZOOM PARALLAXE + SCROLL HORIZONTAL
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".horizontal-container",
                start: "top top",
                end: scrollDuration,
                scrub: 1,
                pin: true,
            }
        });

        // PHASE 1: ZOOM PARALLAXE - People d'abord, puis fond et texte
        // 1) People zoom (commence immédiatement)
        tl.to("#people", {
            scale: peopleScale,
            x: initialXMove,
            duration: peopleDuration,
            ease: "power2.inOut"
        }, 0)

        // 2) Fond zoom (commence à mi-parcours de people)
        .to("#fond", {
            scale: fondScale,
            x: initialXMove,
            duration: fondDuration,
            ease: "power1.inOut"
        }, 3)

        // 3) Texte zoom (commence en même temps que fond)
        .to("#texte", {
            scale: texteScale,
            x: initialXMove,
            duration: texteDuration,
            ease: "power1.inOut"
        }, 3)

        // PHASE 2: FOND ET PEOPLE DISPARAISSENT (texte reste statique)
        // Fond part vers la gauche
        .to("#fond", {
            x: fondExitX,
            duration: fondExitDuration,
            ease: "power1.in"
        }, 12)

        // People part vers la gauche (encore plus loin pour ne plus être visible)
        .to("#people", {
            x: peopleExitX,
            duration: peopleExitDuration,
            ease: "power2.in"
        }, 12);

        // REFRESH SCROLLTRIGGER SUR RESIZE (avec debounce)
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            // Kill all ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            // Unpin all elements
            gsap.set(".horizontal-container", { clearProps: "all" });
            gsap.set(".parallaxe", { clearProps: "all" });
            gsap.set("#fond", { clearProps: "all" });
            gsap.set("#texte", { clearProps: "all" });
            gsap.set("#people", { clearProps: "all" });
        };
    }, []);

    return (
        <div className="horizontal-container w-screen h-screen overflow-visible bg-mypink">
            <section className="parallaxe relative w-screen h-screen overflow-x-visible overflow-y-hidden shrink-0">
                <img
                    id="fond"
                    src={fondparallaxe}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <img
                    id="texte"
                    src={textparallaxe}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover z-50"
                />
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center">
                    <img
                        id="people"
                        src={peopleparallaxe}
                        alt=""
                        className="w-full h-full object-cover z-100 relative"
                    />
                </div>
            </section>
        </div>
    )
}

export default SectionParallaxe;