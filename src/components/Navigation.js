import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Gestion du scroll
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // On cache la barre si on descend
                setIsVisible(false);
            } else {
                // On montre la barre si on remonte
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`NavigationBar ${isVisible ? 'visible' : 'hidden'}`}>
            <button
                className='burger-menu'
                onClick={toggleMenu}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <nav className={`navigation ${isOpen ? 'open' : ''}`}>
                <ul className="pageLink">
                    <li className='nav-item'>
                        <NavLink to='/' exact className={(nav) => (nav.isActive ? "nav-active" : "")} > Accueil </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className={(nav) => (nav.isActive ? "nav-active" : "")} > À propos </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/services' className={(nav) => (nav.isActive ? "nav-active" : "")} > Mes services </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink target='_blank' to='https://billing.stripe.com/p/login/3cs03h1N409K5WM288' className={(nav) => (nav.isActive ? "nav-active" : "")} > Mon Espace <i className="fa-solid fa-arrow-up-right-from-square"></i> </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
