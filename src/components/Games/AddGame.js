import React, {useEffect, useState} from "react";
// import { Field, reduxForm } from 'redux-form'
import {TextField, Button, Typography, Paper, CircularProgress} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select';
import _ from 'lodash';

import useStyles from './styles.js';
import allActions from "../../actions";

const AddGame = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const teamsState = useSelector((state) => state.teams);
    let teams = teamsState.teams
    console.log('teams', teams)

    useEffect(() => {
        dispatch(allActions.teamsActions.getTeams());
    }, [dispatch])

    const [gameData, setGameData] = useState({
        team1: null,
        team2: null,
        team1score: null,
        team2score: null
    })

    let teamsSelect = []
    _.forEach(teams, team => {
        teamsSelect.push({
            value: team.id,
            label: team.name
        })
    })
    let teamsSelect2 = teamsSelect

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gameData.team1 || !gameData.team2) {
            alert('Select the two teams !')
            return
        }

        if (gameData.team1 === gameData.team2) {
            alert('Select two different teams !')
            return
        }

        if (gameData.team1score === gameData.team2score) {
            alert('It can not be a tie game !')
            return
        }

        dispatch(allActions.gamesActions.addGame(gameData.team1, gameData.team2, gameData.team1score, gameData.team2score))
    }

    const state = {
        selectedOption: null,
    }
    const handleChange = (selectedOption) => {
        gameData.team1 = selectedOption.value
    }
    const handleChange2 = (selectedOption) => {
        gameData.team2 = selectedOption.value
    }

    const clear = () => {
        setGameData({team1 : null, team2 : null, team1score : null, team2score: null});
    };

    return (
        !teams ? <CircularProgress /> : (
          <Paper className={classes.paper}>
              <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                  <Typography variant="h6">Create a completed game</Typography>
                  <Select
                      placeholder='Select the first team'
                      className={classes.select}
                      onChange={handleChange}
                      options={teamsSelect} />
                  <Select
                      placeholder='Select the second team'
                      className={classes.select}
                      onChange={handleChange2}
                      options={teamsSelect2} />
                  <TextField
                      name="team1score"
                      type="number"
                      inputProps={{ min: 0 }}
                      // variant="outline"
                      label="Team 1 score"
                      fullWidth
                      value={gameData.team1score || 0}
                      onChange={(e) => setGameData({ ...gameData, team1score: e.target.value })}/>
                  <TextField
                      name="team2score"
                      type="number"
                      inputProps={{ min: 0 }}
                      // variant="outline"
                      label="Team 2 score"
                      fullWidth
                      value={gameData.team2score || 0}
                      onChange={(e) => setGameData({ ...gameData, team2score: e.target.value })}/>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
              </form>

          </Paper>
        )
    );
}

export default AddGame;