import axios from 'axios';

// ne pas faire comme ça
const url = 'http://localhost:5000/'
// const urlPlayers = 'http://localhost:5000/players'
// const urlTeams = 'http://localhost:5000/teams'
// const urlGames = 'http://localhost:5000/games'
// const urlAddPlayer = 'http://localhost:5000/players'

export const fetchPlayers = () => axios.get(`${url}players`);
export const fetchTeams = () => axios.get(`${url}teams`);
export const fetchGames = () => axios.get(`${url}games`);
export const addPlayer = (n, c) => axios.post(`${url}players`, {n, c});
export const createPlayer = (newPlayer) => axios.post(url, newPlayer);