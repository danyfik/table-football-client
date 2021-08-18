import axios from 'axios';

const url = 'http://localhost:5000/'
const urlPlayers = 'http://localhost:5000/players'
const urlTeams = 'http://localhost:5000/teams'

export const fetchPlayers = () => axios.get(urlPlayers);
export const fetchTeams = () => axios.get(urlTeams);
export const createPlayer = (newPlayer) => axios.post(url, newPlayer);