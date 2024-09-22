import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='NavigationBar'>
            <div className='burger-menu' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
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
                        <NavLink target='_blank' to='https://billing.stripe.com/p/login/3cs03h1N409K5WM288' className={(nav) => (nav.isActive ? "nav-active" : "")} > Compte ↗ </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink target='_blank' to='/test-de-francais' className={(nav) => (nav.isActive ? "nav-active" : "")} > Faire un test ↗ </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;