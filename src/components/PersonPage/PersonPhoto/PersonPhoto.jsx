import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setPersonToFavourite, removePersonFromFavourite } from '@store/actions';

import iconFave from './img/fave.svg';
import iconFaveFill from './img/fave-fill.svg';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
    personId,
    personPhoto,
    personName,
    isFavourite,
    setFavourite
}) => {
    const dispatch = useDispatch();

    const dispatchFavouritePerson = () => {
        if (isFavourite) {
            dispatch(removePersonFromFavourite(personId));
            setFavourite(false);
        } else {
            dispatch(setPersonToFavourite({
                [personId]: {
                    name: personName,
                    img: personPhoto,
                }
            }));
            setFavourite(true);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />

                <img
                    className={styles.fave}
                    onClick={dispatchFavouritePerson}
                    src={isFavourite ? iconFaveFill : iconFave}
                    alt={isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'}
                />
            </div>
        </>
    )
}

PersonPhoto.propTypes = {
    personId: PropTypes.string,
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    isFavourite: PropTypes.bool,
    setFavourite: PropTypes.func,
}

export default PersonPhoto;
