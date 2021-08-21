import React, {useEffect, useState} from "react";
// import { Field, reduxForm } from 'redux-form'
import {TextField, Button, Typography, Paper, CircularProgress, InputLabel} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Select from 'react-select';
import _ from 'lodash';

import useStyles from './styles.js';
import allActions from "../../actions";

const AddLiveGame = () => {
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
        team1score: 0,
        team2score: 0
    })

    // _.forEach(teams, (team, i) => {
    //     teams[i] = {
    //         value: team.id,
    //         label: team.name
    //     }
    // })
    let teams2 = teams

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(gameData.team1)
        console.log(gameData.team2)
        console.log(gameData.team1score)
        console.log(gameData.team2score)
        if (!gameData.team1 || !gameData.team2) {
            alert('Please select the two teams !')
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

    const removeScoreTeam1 = () => {
        let score = gameData.team1score === 0 ? 0 : gameData.team1score - 1
        setGameData({ ...gameData, team1score: score })
    };
    const addScoreTeam1 = () => {
        setGameData({ ...gameData, team1score: gameData.team1score + 1 })
    };
    const removeScoreTeam2 = () => {
        let score = gameData.team2score === 0 ? 0 : gameData.team2score - 1
        setGameData({ ...gameData, team2score: score })
    };
    const addScoreTeam2 = () => {
        setGameData({ ...gameData, team2score: gameData.team2score + 1 })
    };

    return (
        !teams ? <CircularProgress /> : (
          <Paper className={classes.paper}>
              <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                  <Typography variant="h6">Create a live game</Typography>
                  <Select
                      placeholder='Select the first team'
                      className={classes.select}
                      onChange={handleChange}
                      options={teams} />
                  <Select
                      placeholder='Select the second team'
                      className={classes.select}
                      onChange={handleChange2}
                      options={teams2} />
                  <div className={classes.divAlign}>
                      <Button
                          className={classes.smallButtonSubmit}
                          color="primary"
                          size="large"
                          variant="contained"
                          onClick={removeScoreTeam1}
                      >-</Button>
                      <InputLabel>
                          <TextField
                              name="team1score"
                              type="number"
                              label="Team 1 score"
                              inputProps={{ min: 0 }}
                              // variant="outline"
                              fullWidth
                              value={gameData.team1score || 0}
                          />
                      </InputLabel>
                      <Button
                          className={classes.smallButtonSubmit}
                          color="primary"
                          size="large"
                          variant="contained"
                          onClick={addScoreTeam1}
                      >+</Button>
                  </div>
                  <div className={classes.divAlign}>
                      <Button
                          className={classes.smallButtonSubmit}
                          color="primary"
                          size="large"
                          variant="contained"
                          onClick={removeScoreTeam2}
                      >-</Button>
                      <InputLabel>
                          <TextField
                              name="team2score"
                              type="number"
                              label="Team 2 score"
                              inputProps={{ min: 0 }}
                              // variant="outline"
                              fullWidth
                              value={gameData.team2score || 0}
                          />
                      </InputLabel>
                      <Button
                          className={classes.smallButtonSubmit}
                          color="primary"
                          size="large"
                          variant="contained"
                          onClick={addScoreTeam2}
                      >+</Button>
                  </div>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>End the game and submit</Button>
                  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear the score</Button>
              </form>

          </Paper>
        )
    );
}

export default AddLiveGame;