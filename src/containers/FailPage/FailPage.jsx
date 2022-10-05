import PropTypes from 'prop-types';

import ErrorMessage from '@components/FailPage/ErrorMessage';
import ErrorVideo from '@components/FailPage/ErrorVideo';

import styles from './FailPage.module.css';

import video from './video/han-solo.mp4'

const FailPage = () => {
    return (
        <>
            <ErrorMessage />
            <ErrorVideo
                src={video}
                classes={styles.fail__video}
            />
        </>
    )
}

FailPage.propTypes = {
    text: PropTypes.string,
}

export default FailPage;
