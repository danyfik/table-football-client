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

const addTeam = (name, player1, player2) => async (dispatch) => {
    try {
        const { data } = await api.addTeam(name, player1, player2);
        console.log('DATA', data)

        dispatch({ type: 'CREATE_TEAM', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    getTeams,
    addTeam
}
