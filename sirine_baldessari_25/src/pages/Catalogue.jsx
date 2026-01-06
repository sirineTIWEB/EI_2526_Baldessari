import { useRef, useEffect } from 'react';
import Hero from '../composants/UI/Hero';
import { useLoading } from "../context/LoadingContext";
import Isotope from 'isotope-layout';
import 'isotope-cells-by-column';
import SortFilter from '../composants/InfoBlocks/SortFilter';
import Oeuvre from '../composants/InfoBlocks/Oeuvre';

function Catalogue() {
    const { activeFilter, oeuvres } = useLoading();
    const isotope = useRef(null);

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
        // Initialiser Isotope localement
        const elem = document.querySelector('.grid');
        if (elem) {
            isotope.current = new Isotope(elem, {
                itemSelector: '.grid-item',
                layoutMode: 'cellsByColumn',
                cellsByColumn: {
                    columnWidth: 110,
                    rowHeight: 110
                }

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
            <section className="grid md:mx-24 mx-12 my-12 gap-5">
                {oeuvres.map((oeuvre, index) => (
                    <Oeuvre key={index} url={oeuvre.url} title={oeuvre.title} image={oeuvre.image.src} tag={oeuvre.tag} tagUrl={oeuvre.tagUrl} />
                ))}
            </section>

        </>
    )
}

export default Catalogue;