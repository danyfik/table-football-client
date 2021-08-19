import * as api from '../api';

const getPlayers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlayers();
        console.log('DATA players', data)

        dispatch({ type: 'FETCH_ALL_PLAYERS', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

const addPlayer = (name, country) => async (dispatch) => {
    try {
        const { data } = await api.addPlayer(name, country);
        console.log('DATA', data)

        dispatch({ type: 'CREATE_PLAYER', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    getPlayers,
    addPlayer
}
