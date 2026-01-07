import Lien from './UI/Lien'

function Nav() {
    return (
        <ul className='flex md:flex-row flex-col'>
            <Lien to="/" title="Accueil" />
            <Lien to="/about" title="Baldessari" />
            <Lien to="/catalogue" title="Catalogue" />
            <Lien to="/info" title="Informations" />
            <Lien to="/contact" title="Contact" />
            <Lien to="/admin" title="Admin" />
        </ul>
    )
}
export default Nav;