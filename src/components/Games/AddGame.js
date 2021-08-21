import React, {useEffect, useState} from "react";
// import { Field, reduxForm } from 'redux-form'
import {TextField, Button, Typography, Paper, CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select';
import _ from 'lodash';

import useStyles from './styles.js';
import allActions from "../../actions";

const AddTeam = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const teamsState = useSelector((state) => state.teams);
    let teams = teamsState.teams

    useEffect(() => {
        dispatch(allActions.teamsActions.getTeams());
    }, [dispatch])

    const [gameData, setGameData] = useState({
        team1: null,
        team2: null,
        team1score: null,
        team2score: null
    })

    _.forEach(teams, (team, i) => {
        teams[i] = {
            value: team.id,
            label: team.name
        }
    })
    let teams2 = teams

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(allActions.gamesActions.addGame(gameData.team1, gameData.team2, 3, 2))
        // dispatch(allActions.teamsActions.getTeams());
        // dispatch(createTeam(gameData))
    }

    const state = {
        selectedOption: null,
    }
    const handleChange = (selectedOption) => {
        // this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        gameData.team1 = selectedOption.value

        const gameToRemove = _.find(teams2, team => {
            return team.value === selectedOption.value
        })
        _.remove(teams2, gameToRemove)
    }
    const handleChange2 = (selectedOption) => {
        // this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        gameData.team2 = selectedOption.value

        const gameToRemove = _.find(teams, team => {
            return team.value === selectedOption.value
        })
        _.remove(teams, gameToRemove)
    }

    const clear = () => {
        setGameData({team1 : null, team2 : null, team1score : null, team2score: null});
    };

    return (
        !teams ? <CircularProgress /> : (
          <Paper className={classes.paper}>
              <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                  <Typography variant="h6">Create a game</Typography>
                  <Select
                      className={classes.select}
                      onChange={handleChange}
                      options={teams} />
                  <Select
                      className={classes.select}
                      onChange={handleChange2}
                      options={teams2} />
                  <TextField
                      name="team1score"
                      // variant="outline"
                      label="Team 1 score"
                      fullWidth
                      value={2}
                      onChange={(e) => setGameData({ ...gameData, team1score: e.target.value })}/>
                  <TextField
                      name="team2score"
                      // variant="outline"
                      label="Team 2 score"
                      fullWidth
                      value={2}
                      onChange={(e) => setGameData({ ...gameData, team2score: e.target.value })}/>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
              </form>

          </Paper>
        )
    );
}

export default AddTeam;