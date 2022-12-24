import { Greeter } from './Greeter';
import { useDispatch } from 'react-redux';
const dispatch = useDispatch();
export { Greeter };
export const updateLocation = () => {
    const dispatch = useDispatch();
    dispatch({
        type: 'UPDATE_LOCATION',
        payload: {
            a: 1
        }
    });
};
