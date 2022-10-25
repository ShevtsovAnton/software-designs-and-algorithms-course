import { useState, FC } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { SET_SEARCH } from '../../store/store';
import type { Store } from '../../store/types';

import styles from './Search.module.scss';

interface SearchProps {
  store?: Store;
  dispatch?: (val) => void;
}

// OR

//interface SearchProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Search(props: SearchProps) {
  const onChange = (value) => {
    props.dispatch({ type: SET_SEARCH, payload: value });
  };

  return (
    <OutlinedInput
      className={styles.input}
      placeholder='Search by country/name/username'
      value={props.store.search}
      type='search'
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
