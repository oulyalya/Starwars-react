import PropTypes from 'prop-types';
import cn from 'classnames';

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import imgLight from './img/light-side.jpg'
import imgDark from './img/dark-side.jpg'
import imgNeutral from './img/falcon.jpg'

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({
    classes,
    theme,
    img,
    text
}) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <img className={styles.item__img} src={img} alt={text} />
            <p className={styles.item__header}>{text}</p>
        </div>
    );
};

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            img: imgLight,
            text: `Light Side`,
            classes: styles.item__light,
        },
        {
            theme: THEME_DARK,
            img: imgDark,
            text: `Dark Side`,
            classes: styles.item__dark,
        },
        {
            theme: THEME_NEUTRAL,
            img: imgNeutral,
            text: `Han Solo`,
            classes: styles.item__neutral,
        },
    ]

    return (
        <div className={styles.container}>
            {elements.map(({ classes, theme, img, text }, index) => (
                <ChooseSideItem
                    key={index}
                    classes={classes}
                    theme={theme}
                    img={img}
                    text={text}
                />
            ))}
        </div>
    )
}

ChooseSide.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    img: PropTypes.string,
    text: PropTypes.string,
}

export default ChooseSide;
