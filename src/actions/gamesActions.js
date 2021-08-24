import * as api from '../api';

const getGames = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGames();

        dispatch({ type: 'FETCH_ALL_GAMES', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

const addGame = (team1, team2, team1Score, team2Score) => async (dispatch) => {
    try {
        const { data } = await api.addGame(team1, team2, team1Score, team2Score);

        dispatch({ type: 'CREATE_GAME', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

const getPlayerGames = (playerId) => async (dispatch) => {
    try {
        const { data } = await api.getPlayerGames(playerId);

        dispatch({ type: 'FETCH_PLAYER_GAMES', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export default {
    getGames,
    addGame,
    getPlayerGames
}
