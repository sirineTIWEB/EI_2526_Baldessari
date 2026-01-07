import Redirection from "./Redirection";
import { useNavigate } from "react-router-dom";

function SectionRedirection() {
    const navigate = useNavigate();

    const goToBaldessari = () => {
        navigate('/baldessari');
    };

    const goToCatalogue = () => {
        navigate('/catalogue');
    };

    const goToInfo = () => {
        navigate('/info');
    };

    return(
        <section className="flex flex-col items-end min-h-[80vh] justify-evenly my-auto mx-10">
            <h6>19 septembre 2025 au 1 février 2026</h6>
            <div className="flex flex-col md:gap-12 gap-24 md:flex-row justify-between">
                <Redirection
                    body="Bozar conçoit l'exposition en harmonie avec l'esprit de Baldessari. Allez à l'encontre de l'artiste et son univers."
                    boutonTitle="Découvrir l'artiste"
                    onClick={goToBaldessari}
                />
                <Redirection
                    body="Le catalogue rassemble ses œuvres et met en lumière la diversité de ses pratiques.Appréhendez l'étendue du travail de John Baldessari et les axes majeurs de son œuvre."
                    boutonTitle="Parcourir le catalogue"
                    onClick={goToCatalogue}
                />
                <Redirection
                    body="Plusieurs évènements en lien à l'exposition ont été organisés: films, débats...
                Approchez l'artiste en explorant ses centres d'intérêt."
                    boutonTitle="Découvrir le programme"
                    onClick={goToInfo}
                />
            </div>
        </section>
    )
}

export default SectionRedirection;