import { FC } from 'react';
import { useState, useEffect, useReducer } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import rows from './mocks/rows.json';
import {dataConverter} from './helpers/data-converter';
import {dataHandler} from './helpers/data-handler';
import { reducer, initialState } from './store/store'; 

import styles from './App.module.scss';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const App: FC = () => {
  const [data, setData] = useState<Row[]>(undefined);
  const [store, dispatch] = useReducer(reducer, initialState);

  const applyDataHandler = dataHandler(store);

  useEffect(() => {
    // fetching data from API
    Promise.all([
      getImages(),
      getUsers(),
      getAccounts(),
    ]).then(([images, users, accounts]: [Image[], User[], Account[]]) => {
      console.log(images, users, accounts)
      setData(dataConverter(users, accounts, images))
    }

    );
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters store={store} dispatch={dispatch} />
            <Sort dispatch={dispatch} />
          </div>
          <Search store={store} dispatch={dispatch} />
        </div>
        <Table rows={applyDataHandler(data)} />
      </div>
    </StyledEngineProvider>
  );
};
