import { memo, useState, useCallback, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Suspense } from 'react';

import styles from './Navbar.module.scss';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuActive(prev => !prev);
    }, []);

    const handleLinkClick = () => {
        setMenuActive(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50; 
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Suspense fallback="Loading translations...">
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.logo}>
                    <p style={{
                        color: 'white',
                        fontSize: '24px',
                    }}>
                        Curso CSS.
                    </p>
                </div>
                <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
                    <ScrollLink
                        to="inicio"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
                        className={styles.navLink}
                    >
                        Inicio
                    </ScrollLink>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
                        className={styles.navLink}
                    >
                        Acerca de 
                    </ScrollLink>
                    <ScrollLink
                        to="contacto"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
                        className={styles.navLink}
                    >
                        Contacto
                    </ScrollLink>
                    <ScrollLink
                        to="blog"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        onClick={handleLinkClick}
                        className={styles.navLink}
                    >
                        Blog
                    </ScrollLink>
                </div>
                <div
                    className={`${styles.menuIcon} ${menuActive ? styles.active : ''}`}
                    onClick={toggleMenu}
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle Menu"
                >
                    <span className={menuActive ? styles.closeIcon : styles.hamburgerIcon}></span>
                </div>
            </nav>
        </Suspense>
    );
};

export default memo(Navbar);
