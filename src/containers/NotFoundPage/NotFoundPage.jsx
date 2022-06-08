import { useLocation } from 'react-router';

import img from './img/not-found.png';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    let location = useLocation();
    // location.pathname

    return (
        <>
            <img className={styles.not_found__img} src={img} alt="Not found" />
            <p className={styles.not_found__text}>No match for <u>{location.pathname}</u></p>
        </>
    )
}

export default NotFoundPage;
