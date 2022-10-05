import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {debounce} from 'lodash';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import { API_SEARCH } from '@constants/api';
import { getPeopleId, getPeopleImage } from '@services/getPeopleData';

import Input from '@components/SearchPage/Input/Input';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo/SearchPageInfo';

import styles from './SearchPage.module.css';

const SearchPage = ({ setErrorApi }) => {
  const [searchInputvalue, setSearchInputValue] = useState('');
  const [people, setPeople] = useState([]);

  const getResponce = async param => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponce('');
  }, []);

  const debouncedGetResponce= useCallback(
    debounce(value => getResponce(value), 300),
    []
  );

  const handleInputChange = value => {
    setSearchInputValue(value);
    debouncedGetResponce(value);
  };

  return (
    <>
      <h1 className="header__text"></h1>

      <Input
        classes={styles.input__search}
        value={searchInputvalue}
        handleInputChange={handleInputChange}
        placeholder="Type character's name"
      />
      
      <SearchPageInfo people={people} />
    </>
  )
}

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
  //   text: PropTypes.string,
}

export default withErrorApi(SearchPage);
