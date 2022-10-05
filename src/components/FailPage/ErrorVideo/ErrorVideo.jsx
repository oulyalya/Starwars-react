import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ErrorVideo.module.css';

const ErrorVideo = ({
    src,
    playbackRate = 1.0,
    classes
}) => {
    const videoRef = useRef(null);

    useEffect(()=> {
        videoRef.current.playbackRate = playbackRate;

    }, []);

    return (
        <video
            className={cn(styles.video, classes)}
            loop
            autoPlay
            muted
            ref={videoRef}
        >
            <source src={src} />
            ErrorVideo
        </video>
    )
}

ErrorVideo.propTypes = {
    src: PropTypes.string,
    playbackRate: PropTypes.number,
    classes: PropTypes.string,
}

export default ErrorVideo;
