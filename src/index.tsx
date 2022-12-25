import { legacy_createStore as createStore, Store } from 'redux'
export const updateLocation = (store: Store) => {
    store.dispatch({
        type: 'UPDATE_LOCATION',
        payload:
        {
            a: 1
        }
    })
}