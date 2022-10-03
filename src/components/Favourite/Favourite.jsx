import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import icon from './img/fave.svg';

import styles from './Favourite.module.css';

const Favourite = () => {
    const [count, setCount] = useState(0);

    const storeData = useSelector(state => state.favouriteReducer);

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2
            ? setCount('...')
            : setCount(length);
    }, [storeData]);

    return (
        <div className={styles.container}>
            <NavLink to="/favourites" exact="false">
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Favourites" />
            </NavLink>
        </div>
    )
}

export default Favourite;
