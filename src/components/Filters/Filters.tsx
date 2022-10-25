import { useState, FC } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { SET_FILTER } from '../../store/store';
import type { Store } from '../../store/types';

import styles from './Filters.module.scss';

interface FiltersProps {
  store?: Store;
  dispatch?: (val) => void;
}

// OR

//interface FiltersProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export const OPTIONS_TYPES = {
  WITHOUT_POSTS: 'Without posts',
  MORE_THEN_100: 'More than 100 posts',
};

const OPTIONS = [
  { title: OPTIONS_TYPES.WITHOUT_POSTS },
  { title: OPTIONS_TYPES.MORE_THEN_100 },
];

export function Filters(props: FiltersProps) {
  const onChange = ({ title }) => {
    props.dispatch({ type: SET_FILTER, payload: title });
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            key={option.title}
            onClick={() => onChange(option)}
          >
            <Checkbox
              checked={
                !!props.store.filters.find((filter) => filter === option.title)
              }
              value={option.title}
              size='small'
              color='primary'
              onChange={() => onChange(option)}
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
