import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import Favourite from '@components/Favourite';


import imgDroid from './img/droid.svg';
import imgLightsaber from './img/lightsaber.svg';
import imgSpaceStation from './img/spacestation.svg';

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(imgSpaceStation);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgLightsaber);
                break;
            case THEME_DARK:
                setIcon(imgSpaceStation);
                break;
            case THEME_NEUTRAL:
                setIcon(imgDroid);
                break;
            default:
                setIcon(imgSpaceStation);
        }
    }, [isTheme]);

    return (
        <>
            <div className={styles.header__container}>
                <img className={styles.header__logo} src={icon} alt="Logo" />
                <ul className={styles.header__nav}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/people/?page=1" exact="false">People</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" exact="false">Search</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fail" exact="false">Fail</NavLink>
                    </li>
                    <li>
                        <NavLink to="/not-found" exact="false">404</NavLink>
                    </li>
                </ul>

                <Favourite />
            </div>
        </>
    )
}

export default Header;
