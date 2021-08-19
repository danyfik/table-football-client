import * as api from '../api';

const getTeams = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTeams();
        console.log('DATA teams', data)

        // dispatch(data);
        dispatch({ type: 'FETCH_ALL_TEAMS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    getTeams
}
//
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