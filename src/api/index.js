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
export const addPlayer = (name, country) => axios.post(`${url}players`, {name, country});
export const addTeam = (name, player1, player2) => axios.post(`${url}teams`, {name, player1, player2});
export const addGame = (team1, team2, team1Score, team2Score) => axios.post(`${url}games`, {team1, team2, team1Score, team2Score});
// export const createPlayer = (newPlayer) => axios.post(url, newPlayer);