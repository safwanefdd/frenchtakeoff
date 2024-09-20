import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className='NavigationBar'>
            <nav className='navigation'>
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
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;