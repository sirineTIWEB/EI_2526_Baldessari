import { Link } from "react-router";
import Facebook from '../assets/icon/facebook.png';
import Instagram from '../assets/icon/instagram.png';
import Youtube from '../assets/icon/youtube.png';
import Logo from '../assets/logo/logo_header.png';

function Footer() {
    return (
        <footer className="bg-mypink p-12 md:px-24 md:py-5 flex md:flex-row flex-col gap-12 md:justify-between">
            <section className="flex flex-col gap-10">
                <img src={Logo} alt="logo Baldessari" className="h-12 w-fit object-contain"/>
                <div className="flex md:flex-row flex-col gap-6 md:gap-0 md:justify-between">
                    <div className="flex flex-col items-start gap-1.5">
                        <h3>Palais des Beaux-Arts</h3>
                        <h3>Rue Ravenstein, 23 1000 Bruxelles</h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-1.5">
                        <h3>Heure d’ouverture</h3>
                        <h3>Mardi à Dimanche 10:00 à 18:00</h3>
                    </div>
                </div>
                <h3 className="uppercase hidden md:block">© 2026 — RINE. JOHN BALDESSARI, paraboles fables et autres salades.</h3>
            </section>
            <section className="my-2.5 mx-0 md:m-2.5 flex flex-col h-full md:justify-between gap-2.5 md:items-end">
                <h2>Réseaux Sociaux</h2>

                {/* redirection dans un nouvel onglet */}
                <Link target="_blank" rel="noopener noreferrer" to={"https://www.bozar.be/fr"} className="font-semibold text-clamp-legend line-clamp-legend border-b-2 border-black py-1 w-fit">Redirection vers Bozar</Link>

                <div className="flex flex-row gap-2.5 py-1">
                    <Link target="_blank" rel="noopener noreferrer" to={"https://www.facebook.com/BozarBrussels/"} className="">
                        <img src={Facebook} alt="Facebook" />
                    </Link>

                    <Link target="_blank" rel="noopener noreferrer" to={"https://www.instagram.com/bozarbrussels/"} className="">
                        <img src={Instagram} alt="Instagram" />
                    </Link>

                    <Link target="_blank" rel="noopener noreferrer" to={"https://www.youtube.com/user/bozarbrussel"} className="">
                        <img src={Youtube} alt="Youtube" />
                    </Link>

                    <Link target="_blank" rel="noopener noreferrer" to={"https://www.bozar.be/fr/notre-charte-pour-vos-donnees-caractere-personnel"} className="font-semibold text-clamp-legend line-clamp-legend capitalize">Vie privée</Link>
                </div>
            </section>

            <h3 className="uppercase block md:hidden">© 2026 — RINE. JOHN BALDESSARI, paraboles fables et autres salades.</h3>

        </footer>
    )
}

export default Footer;