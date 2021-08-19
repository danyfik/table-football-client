import * as api from '../api';

const getGames = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGames();
        console.log('DATA games', data)

        dispatch({ type: 'FETCH_ALL_GAMES', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    getGames
}
//
// export const createGame = (game) => async (dispatch) => {
//     try {
//         const { data } = await api.createGame(game);
//         console.log(data)
//
//         dispatch({ type: 'CREATE', payload: data })
//     } catch (error) {
//         console.log(error);
//     }
// }