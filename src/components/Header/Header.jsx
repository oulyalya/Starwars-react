// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    // const [link, setLink] = useState('/people');

	// const handleMouseEnter = () => {
	// 	setLink('/people/?page=1');
	// };

	// const handleMouseLeave = () => {
	// 	setLink('/people');
	// };

    return (
        <>
            <div className={styles.header__container}>
                <ul className={styles.header__nav}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/people/?page=1" exact="false">People</NavLink>
                        {/* <NavLink to={link} exact="false" onMouseDown={handleMouseEnter} onMouseLeave={handleMouseLeave}>People</NavLink> */}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
