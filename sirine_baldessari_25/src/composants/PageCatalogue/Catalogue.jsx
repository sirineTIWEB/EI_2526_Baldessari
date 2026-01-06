import Hero from '../UI/Hero';
import { useLoading } from "../LoadingPage";

function Catalogue() {

    const { activeFFilter, setActiveFilter, oeuvres } = useLoading();

    return(
        <>
            <Hero title="Le Catalogue"></Hero>
        </>

    )
} export default Catalogue;