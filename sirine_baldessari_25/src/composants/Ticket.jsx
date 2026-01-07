import BozarLogo from '../assets/logo/logo_bozar.png';
import { useState, useEffect } from 'react';


function Ticket(props) {

    // Récupérer en utilisant usestate pour MAJ de l'heure
    const [date, setDate] = useState(new Date());
    // initialiser la date au premier niv pour que jour,heure,etc soit pas vide

    useEffect(() => {

        // MAJ toutes les heures
        const interval = setInterval(() => {
            setDate(new Date());
        }, 3600000); // = 1h

        return () => clearInterval(interval);
    }, []);


    // Pour chaque besoin, réutiliser la même variable

    // récuperer le jour : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    const jour = new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(date);

    // récuperer la date
    const jourNum = date.toLocaleDateString();

    // récuperer l'heure arrondi avec MAJ chaque heure
    const heure = date.getHours() + ":00";


    return (
        <article className='border-2 flex flex-col border-black bg-mypink gap-12 mb-10 pb-10 w-full md:w-[40vw]'>
            <div>
                <img src={BozarLogo} alt="Bozar Logo" className='md:h-28 h-16' />
                <div className='ml-5 md:ml-8 flex flex-col md:gap-1'>
                    <h3>John Baldessari</h3>
                    <h3>Paraboles, fables et autres salades</h3>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between md:px-8 px-5 md:w-full'>
                <div className='flex flex-row justify-between w-full md:mb-0 mb-5'>
                    <div>
                        <h4>{props.titre}</h4>
                        <h4>{props.prix}</h4>
                    </div>

                    <div className='flex flex-col items-end md:items-center md:pr-2.5'>
                        <h4>{jour}</h4>
                        <h4>{jourNum}</h4>
                        <h4>{heure}</h4>
                    </div>

                </div>
                <div className='md:border-t-0 border-t-2 md:border-l-2 border-black md:px-2.5 flex flex-col w-full md:w-[30vw] pt-5 md:pt-0'>
                    <h3>Lieu</h3>
                    <div >
                        <h4 className='text-nowrap'>BOZAR/Palais des Beaux-Arts</h4>
                        <h4 className='text-nowrap'>Rue Ravenstein 23</h4>
                        <h4 className='text-nowrap'>1000 BRUXELLES - BRUSSEL</h4>
                    </div>
                </div>
            </div>




        </article>
    )
}

export default Ticket;