import { useState } from 'react'
import Nav from './Nav'
import Logo from '../assets/logo/logo_header.png'
import LogoMobile from '../assets/logo/logo_symbol.svg'
import BurgerMenu from '../assets/icon/menu.png'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header>
            <nav className="h-16 items-center mx-11 md:flex hidden justify-between">
                <img src={Logo} alt="logo Baldessari" className='h-8 w-fit object-contain' />
                <Nav />
            </nav>

            <nav className="h-16 items-center mx-5 md:hidden flex justify-between relative">
                <img src={LogoMobile} alt="logo Baldessari" className='h-8 w-fit object-contain' />
                <button onClick={toggleMenu} className='z-50'>
                    <img src={BurgerMenu} alt="burger menu" className='h-8 w-fit object-contain' />
                </button>

                {/* Overlay de fond */}
                {isMenuOpen && (
                    <div
                        className='fixed inset-0 bg-black opacity-80 z-40'
                        onClick={closeMenu}
                    />
                )}

                {/* Sidebar menu */}
                <div className={`fixed top-0 right-0 h-screen w-[80vw] bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className='pt-20 px-6' onClick={closeMenu}>
                        <Nav />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;