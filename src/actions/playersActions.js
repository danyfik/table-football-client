import * as api from '../api';

const getPlayers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlayers();

        dispatch({ type: 'FETCH_ALL_PLAYERS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

const addPlayer = (name, country) => async (dispatch) => {
    try {
        const { data } = await api.addPlayer(name, country);

        dispatch({ type: 'CREATE_PLAYER', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    getPlayers,
    addPlayer
}
