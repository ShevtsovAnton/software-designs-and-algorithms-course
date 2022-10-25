import type { Store } from '../store/types';

import { OPTIONS_TYPES, Row, SORT_TYPES } from '../components'

const filterData = (filters: string[], rows: Row[]): Row[] => rows.filter(row => (
    (filters.includes(OPTIONS_TYPES.WITHOUT_POSTS) && row.posts === 0) ||
    (filters.includes(OPTIONS_TYPES.MORE_THEN_100) && row.posts >= 100)
)
);

const searchData = (search: string, rows: Row[]): Row[] => rows.filter(row => {
    const name = row.name.toLocaleLowerCase();
    const query = search.toLocaleLowerCase();
    const country = row.country.toLocaleLowerCase();
    const username = row.username.toLocaleLowerCase();

    return (
        name.includes(query) ||
        country.includes(query) ||
        username.includes(query)
    );
}
);

const sortData = (sort: string, rows: Row[]): Row[] => {
    if (sort === SORT_TYPES.DESC) {
        return rows.sort((rowA, rowB) => rowA.lastPayments < rowB.lastPayments ? 1 : -1);
    } else if (sort === SORT_TYPES.ASC) {
        return rows.sort((rowA, rowB) => rowA.lastPayments > rowB.lastPayments ? 1 : -1);
    } else {
        return rows;
    }
}

export const dataHandler = (store: Store) =>
    (rows: Row[]): Row[] => {
        let updatedRows = [...rows];

        if (store.filters.length > 0) {
            updatedRows = filterData(store.filters, rows);
        }

        if (store.search) {
            let searchResults = searchData(store.search, rows);
            if (store.filters.length > 0) {
                const usernames = new Set(updatedRows.map(row => row.username));
                updatedRows = [...updatedRows, ...searchResults.filter(result => !usernames.has(result.username))]
            } else {
                updatedRows = [...searchResults];
            }
        }

        if (store.sort) {
            updatedRows = sortData(store.sort, updatedRows);
        }

        return updatedRows;
    }
