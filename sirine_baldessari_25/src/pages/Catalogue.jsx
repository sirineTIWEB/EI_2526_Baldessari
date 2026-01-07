import { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../composants/UI/Hero';
import { useLoading } from "../context/LoadingContext";
import Isotope from 'isotope-layout';
import 'isotope-cells-by-column';
import SortFilter from '../composants/isotope/SortFilter';
import Oeuvre from '../composants/Oeuvre';

function Catalogue() {
    const { activeFilter, oeuvres, setActiveFilter } = useLoading();
    const isotope = useRef(null);

    // pour lire le filtre dans l'URL
    const [searchParams] = useSearchParams();

    const filters = [
        { label: 'Tous', value: '*' },
        { label: 'Peinture', value: '.tag-peinture' },
        { label: 'Photo', value: '.tag-photo' },
        { label: 'Sculpture', value: '.tag-sculpture' }
    ];

    const sorting = [
        { label: 'Date (plus récent)', value: 'date-desc' },
        { label: 'Date (plus ancien)', value: 'date-asc' },
        { label: 'oeuvre (A-Z)', value: 'titre-asc' },
        { label: 'oeuvre (Z-A)', value: 'titre-desc' }
    ];

    useEffect(() => {
        // Lire le paramètre filtre depuis l'URL au chargement
        const filtreParam = searchParams.get('filtre');
        if (filtreParam) {
            // Convertir le paramètre URL en format Isotope
            const isotopeFiltreValue = `.tag-${filtreParam}`;
            setActiveFilter(isotopeFiltreValue);
        }
    }, [searchParams, setActiveFilter]);

    useEffect(() => {
        // Initialiser Isotope localement
        const elem = document.querySelector('.gridiso');

        // rajout du calcul du layout
        if (elem && !isotope.current) {
            isotope.current = new Isotope(elem, {
                itemSelector: '.grid-item',
                layoutMode: 'fitRows'
            });
        }

        // Cleanup: détruire l'instance au démontage
        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        // Appliquer le filtre depuis le contexte
        if (isotope.current) {
            isotope.current.arrange({ filter: activeFilter });
        }
    }, [activeFilter]);

    return (
        <>
            <Hero title="Le Catalogue" />
            <SortFilter filters={filters} sorting={sorting} />
            <section className="gridiso md:mx-24 mx-12">
                {oeuvres.map((oeuvre, index) => (
                    <Oeuvre key={index} url={oeuvre.url} title={oeuvre.title} image={oeuvre.image.src} tag={oeuvre.tag} tagUrl={oeuvre.tagUrl} />
                ))}
            </section>

        </>
    )
}

export default Catalogue;