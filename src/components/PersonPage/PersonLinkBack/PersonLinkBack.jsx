import { Navigate, useNavigate } from 'react-router';
import iconBack from './img/back.svg'
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const Navigate = useNavigate();

    const handleGoBack = (evt) => {
        evt.preventDefault();
        Navigate(-1);
    };

    return (
        <a
            href="#"
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={iconBack} width="25" alt="Go back" />
            <span>Go back</span>
        </a>
    )
}

export default PersonLinkBack;
