export const updateLocation = (store) => {
    store.dispatch({
        type: 'UPDATE_LOCATION',
        payload: {
            a: 1
        }
    });
};
