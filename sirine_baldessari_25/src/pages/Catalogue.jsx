import Hero from '../composants/UI/Hero';
import { useLoading } from "../context/LoadingContext";

function Catalogue() {

    const { activeFFilter, setActiveFilter, oeuvres } = useLoading();

    return(
        <>
            <Hero title="Le Catalogue"></Hero>
        </>

    )
} export default Catalogue;