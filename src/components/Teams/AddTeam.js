import React, {useEffect, useState} from "react";
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
    let caca = true

    useEffect(() => {
        dispatch(allActions.playersActions.getPlayers());
    }, [dispatch])

    const [teamData, setTeamData] = useState({
        name: '',
        player1: null,
        player2: null
    })

    let playersSelect = []
    _.forEach(players, player => {
        playersSelect.push({
            value: player.id,
            label: player.name
        })
    })
    let playersSelect2 = playersSelect

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(teamData.name)
        console.log(teamData.player1)
        console.log(teamData.player2)

        if (!teamData.name) {
            alert('Enter a team name !')
            return
        }

        if (!teamData.player1) {
            alert('Select at least the first player (a second player is not required)')
            return
        }

        if (teamData.player1 === teamData.player2) {
            alert('Do not select the same players !')
            return
        }

        dispatch(allActions.teamsActions.addTeam(teamData.name, teamData.player1, teamData.player2)).then(() => {
            dispatch(allActions.teamsActions.getTeams())
        })
    }

    const state = {
        selectedOption: null,
    }
    const handleChange = (selectedOption) => {
        teamData.player1 = selectedOption.value
    }
    const handleChange2 = (selectedOption) => {
        teamData.player2 = selectedOption.value
    }

    const clear = () => {
        setTeamData({ name: '', player1 : null, player2 : null});
    };

    return (
        !players ? <CircularProgress /> : (
          <Paper className={classes.paper}>
              <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                  <Typography variant="h6">Create a team</Typography>
                  <TextField
                      name="name"
                      // variant="outline"
                      label="Team name"
                      fullWidth
                      value={teamData.name}
                      onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
                  />
                  <Select
                      placeholder='Select the first player'
                      className={classes.select}
                      onChange={handleChange}
                      options={playersSelect} />
                  <Select
                      placeholder='Select the second player'
                      className={classes.select}
                      onChange={handleChange2}
                      options={playersSelect2} />
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
              </form>

          </Paper>
        )
    );
}

export default AddTeam;