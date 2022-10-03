import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList';

import styles from './FavouritesPage.module.css';

const FavouritesPage = () => {
  const [people, setPeople] = useState([]);

  const storeData = useSelector(state => state.favouriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map(el => {
        return {
          id: el[0],
          ...el[1],
        };
      });

      setPeople(res);
    }
  }, [storeData]);

  return (
    <>
      <h1 className="header__text">Favourites</h1>
      {people.length
        ? <PeopleList people={people} />
        : <h2 className={styles.nofave}>No data</h2>
      }
    </>
  )
}

export default FavouritesPage;
