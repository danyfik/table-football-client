import axios from 'axios';

const url = 'http://localhost:5000/'

export const fetchPlayers = () => axios.get(`${url}players`);
export const fetchTeams = () => axios.get(`${url}teams`);
export const fetchGames = () => axios.get(`${url}games`);
export const addPlayer = (name, country) => axios.post(`${url}players`, {name, country});
export const addTeam = (name, player1, player2) => axios.post(`${url}teams`, {name, player1, player2});
export const addGame = (team1, team2, team1Score, team2Score) => axios.post(`${url}games`, {team1, team2, team1Score, team2Score});
export const getPlayerGames = (playerId) => axios.get(`${url}games/${playerId}`);
