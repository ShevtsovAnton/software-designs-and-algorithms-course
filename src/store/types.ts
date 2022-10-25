export type Action = {
    type: string,
    payload?: any
}

export type Store = {
    sort?: string,
    search?: string,
    filters?: string[],
}

export type Reducer = (state: Store, action: Action) => Store;
