import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UIButton from '../../UI/UIButton/UIButton';

import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <>
            <div className={styles.container}>
                <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
                    <UIButton
                        text="Previous"
                        onClick={handleChangePrev}
                        disabled={!prevPage}
                    />
                </Link>
                <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
                    <UIButton
                        text="Next"
                        disabled={!nextPage}
                        onClick={handleChangeNext}
                    />
                </Link>
            </div>
        </>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}

export default PeopleNavigation;
