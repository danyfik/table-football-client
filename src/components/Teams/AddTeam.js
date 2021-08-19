import React, { useState } from "react";
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
    const playersState = useSelector((state) => state.players);
    let players = playersState.players
    console.log('players dans team', players)

    const [teamData, setTeamData] = useState({
        name: '',
        player1: null,
        player2: null
    })

    _.forEach(players, (player, i) => {
        players[i] = {
            value: player.id,
            label: player.name
        }
    })
    console.log('pl', players)
    let players2 = players

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(teamData.name)
        console.log(teamData.player1)
        console.log(teamData.player2)
        dispatch(allActions.teamsActions.addTeam(teamData.name, teamData.player1, teamData.player2))
        // dispatch(allActions.teamsActions.getTeams());
        // dispatch(createTeam(teamData))
    }

    const state = {
        selectedOption: null,
    }
    const handleChange = (selectedOption) => {
        // this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        teamData.player1 = selectedOption.value

        const playerToRemove = _.find(players2, pl => {
            return pl.value === selectedOption.value
        })
        _.remove(players2, playerToRemove)
        console.log('sssa', players2)
    }
    const handleChange2 = (selectedOption) => {
        // this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        teamData.player2 = selectedOption.value

        const playerToRemove = _.find(players, pl => {
            return pl.value === selectedOption.value
        })
        _.remove(players, playerToRemove)
    }

    const clear = () => {
        setTeamData({ name: '', player1 : null, player2 : null});
    };

    return (
        !players ? <CircularProgress /> : (
          <Paper className={classes.paper}>
              <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                  <Typography variant="h6">Add a team</Typography>
                  <TextField
                      name="name"
                      // variant="outline"
                      label="Team name"
                      fullWidth
                      value={teamData.name}
                      onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}/>
                  <Select
                      className={classes.select}
                      onChange={handleChange}
                      value={players[3]}
                      options={players} />
                  <Select
                      className={classes.select}
                      onChange={handleChange2}
                      options={players2} />
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
              </form>

          </Paper>
        )
    );
}

export default AddTeam;