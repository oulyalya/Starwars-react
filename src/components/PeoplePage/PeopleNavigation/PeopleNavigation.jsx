import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <div>
                <Link className={styles.link} to={`/people/?page=${counterPage - 1}`}>
                    <button
                        className={styles.button}
                        disabled={!prevPage}
                        onClick={handleChangePrev}>
                        Previous
                    </button>
                </Link>
                <Link className={styles.link} to={`/people/?page=${counterPage + 1}`}>
                    <button
                        className={styles.button}
                        disabled={!nextPage}
                        onClick={handleChangeNext}>
                        Next
                    </button>
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
