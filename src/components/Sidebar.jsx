import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Sidebar() {
    const [tog, setTog] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const toggleSidebar = () => setTog(prev => !prev);

    const toggleTheme = () => {
        setDarkMode(prev => {
            const newTheme = !prev;
            localStorage.setItem('darkMode', newTheme);
            return newTheme;
        });
    };

    return (
        <div className={`sidebar ${tog ? 'expanded' : ''}`}>
            <div className={`sidebar-toggle ${tog ? 'left' : ''}`} onClick={toggleSidebar}>
                <i className={`bx bx-chevrons-right`}></i>
            </div>

            <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
                {tog && <h2 className="logo-text">TAS RND</h2>}
            </div>

            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/tasrnd" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className='bx bx-home-alt'></i>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className='bx bx-user'></i>
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className='bx bx-briefcase'></i>
                        <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                        <i className='bx bx-envelope'></i>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>

            <div className="theme-toggle" onClick={toggleTheme}>
                <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
                {tog && <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
            </div>
        </div>
    );
}
