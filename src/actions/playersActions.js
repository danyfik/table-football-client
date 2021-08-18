import * as api from '../api';

export const getPlayers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlayers();
        console.log('DATA', data)

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

// export const createPlayer = (player) => async (dispatch) => {
//     try {
//         const { data } = await api.createPlayer(player);
//         console.log(data)
//
//         dispatch({ type: 'CREATE', payload: data })
//     } catch (error) {
//         console.log(error);
//     }
// }