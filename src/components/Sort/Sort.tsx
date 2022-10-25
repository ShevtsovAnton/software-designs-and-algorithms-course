import { FC } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { SET_SORT } from '../../store/store';
import type { Store } from '../../store/types';

import styles from './Sort.module.scss';

interface SortProps {
  store?: Store;
  dispatch?: (val) => void;
}

export const SORT_TYPES = {
  ASC: 'asc',
  DESC: 'desc',
};

// OR

//interface SortProps {
//  selected?: {};
//  updateSelected?: (val) => void;
//}

// OR store can be global

export function Sort(props: SortProps) {
  const handleChange = (value) => {
    props.dispatch({ type: SET_SORT, payload: value });
  };

  return (
    <FormControl className={styles.control} component='fieldset'>
      <FormLabel className={styles.label}>Sort by payments</FormLabel>
      <RadioGroup
        className={styles.group}
        aria-label='sorting'
        name='radio-buttons-group'
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel
          value={SORT_TYPES.DESC}
          control={<Radio />}
          label='desc'
        />
        <FormControlLabel
          value={SORT_TYPES.ASC}
          control={<Radio />}
          label='asc'
        />
      </RadioGroup>
    </FormControl>
  );
}
