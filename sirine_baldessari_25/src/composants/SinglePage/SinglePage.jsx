import { useParams, useLocation } from "react-router-dom";
import { useLoading } from "../LoadingPage";
import Bouton from "../UI/Bouton";
import Tag from "../UI/Tag";
import InfoBlock from "../PageInfo/InfoBlock";

function SinglePage() {
    // recup l'id de l'event cliqué depuis l'URL
    const { id } = useParams();

    // va permettre de déterminer si c'est un event ou une oeuvre
    const location = useLocation();

    // recup les événements depuis le Context
    const { events, oeuvres } = useLoading();

    // déterminable avec seulement un pathname
    const isEvent = location.pathname.startsWith('/evenement');

    // au lieu de perdre du temps à chercher dans les DB, on détermine déjà quel DB est relié
    const data = isEvent
        ? events.find(e => e.url === id)
        : oeuvres.find(o => o.url === id);

    // Message d'erreur précis selon le type
    if (!data) {
        return <div>{isEvent ? 'Événement' : 'Oeuvre'} non trouvé(e)</div>;
    }

    return (
        <>
            <div className="md:mx-24 md:my-9 w-fit">
                <Bouton title={`Retour aux ${isEvent ? 'événements' : 'oeuvres'}`} onClick={() => window.history.back()} />
            </div>
            <div className="hidden md:flex md:mx-24 gap-24">
                <div className={`${data.image[0].aspect === 'portrait' ? 'w-[40vw]' : 'w-[70vw]'} aspect-3/2`}>
                    <img src={data.image[0].src} alt={data.title} className="w-full object-cover" />

                </div>
                <div className="flex flex-col gap-20 w-fit">
                    <div>
                        <h5>{data.title}</h5>
                        <div className="flex items-center gap-5">
                            <h3>{data.date}</h3>
                            <Tag title={data.tag} filtre={data.tagUrl} className="text-mypink border-mypink" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <h5>Description</h5>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:hidden gap-24">
                <div className="flex flex-col gap-20">
                    <div className={`h- ${data.image[0].aspect === 'portrait' ? 'w-[40vw]' : 'w-screen'}`}>
                        <img src={data.image[0].src} alt={data.title} className="object-cover" />

                    </div>
                    <div className="md:ml-24 md:mr-2.5">
                        <h5>{data.title}</h5>
                        <div className="flex items-center gap-5">
                            <h3>{data.date}</h3>
                            <Tag title={data.tag} filtre={data.tagUrl} className="text-mypink border-mypink" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1.5 md:ml-24 md:mr-2.5">
                    <h5>Description</h5>
                    <p>{data.description}</p>
                </div>
            </div>

            {isEvent && (
                <>
                    <section className='md:mx-24 mx-12 md:my-24 my-12 flex md:flex-row flex-col md:gap-0 gap-6 justify-between'>
                        <InfoBlock title="Tarifs">
                            {data.tarifs.map((tarif, index) => (
                                <div key={index} className="flex flex-row justify-between w-[30vw]">
                                    <p>{tarif.type}</p>
                                    <p>{tarif.prix}</p>
                                </div>
                            ))}
                        </InfoBlock>
                        <InfoBlock title="Langues">
                            <p>{data.langues}</p>
                        </InfoBlock>
                    </section>
                    <section className="md:mx-24 mx-12 md:mb-24 mb-12">
                        <InfoBlock title="En Lien">
                            <div className="w-[60vw] aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src={data.autre}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </InfoBlock>


                    </section>

                </>

            )}
        </>
    )
}

export default SinglePage;
