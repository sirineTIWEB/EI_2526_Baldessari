import BozarLogo from '../../assets/logo/logo_bozar.png';
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
        <article className='border-2 flex flex-col border-black bg-mypink md:gap-12 md:mb-10 md:pb-10 md:w-[40vw]'>
            <div>
                <img src={BozarLogo} alt="Bozar Logo" className='md:h-28 h-16' />
                <div className='md:ml-8 flex flex-col md:gap-1'>
                    <h3>John Baldessari</h3>
                    <h3>Paraboles, fables et autres salades</h3>
                </div>
            </div>
            <div className='flex flex-row md:mx-8 w-full'>
                <div className='flex flex-row justify-between w-full'>
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
                <div className='border-l-2 border-black md:px-2.5 flex flex-col w-fit'>
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