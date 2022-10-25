import type { Action, Store, Reducer } from "./types";

export const SET_SORT = 'SET_SORT';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_FILTER = 'SET_FILTER';

export const initialState: Store = {
    sort: '',
    search: '',
    filters: [],
}

export const reducer: Reducer = (state: Store, action: Action): Store => {
    switch (action.type) {
        case SET_FILTER:
            const title = action.payload
            const selectedFilter = state.filters;

            let updatedFilters;

            if (selectedFilter.find((filter) => filter === title)) {
                updatedFilters = selectedFilter.filter(filter => filter !== title);
            } else {
                updatedFilters = [...selectedFilter, title];
            }

            return { ...state, filters: updatedFilters }
        case SET_SEARCH:
            return { ...state, search: action.payload }
        case SET_SORT:
            return { ...state, sort: action.payload }
        default:
            return state;
    }
}
