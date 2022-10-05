import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Input.module.css';

import icon from './img/cancel.svg';

const Input = ({
    value,
    handleInputChange,
    placeholder,
    classes,
}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(evt) => handleInputChange(evt.target.value)}
            placeholder={placeholder}
        />
        <img
            className={cn(styles.clear, !value && styles.clear__disabled)}
            onClick={() => value && handleInputChange('')}
            src={icon}
            alt="Clear"
        />
    </div>
)

Input.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}

export default Input;
