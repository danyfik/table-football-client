import { combineReducers } from "redux";
import players from './players'
import teams from './teams'
import games from './games'

export default combineReducers({
    players,
    teams,
    games
})