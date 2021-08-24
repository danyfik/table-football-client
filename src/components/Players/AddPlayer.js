import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from './styles.js';
import allActions from "../../actions";

const AddPlayer = () => {
    const [playerData, setPlayerData] = useState({
        name: '',
        country : ''
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false)
    const openCloseForm = () => {
        setIsOpen(!isOpen)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!playerData.name) {
            alert('Please enter a team name !')
            return
        }
        if (!playerData.country) {
            alert('Please enter a country !')
            return
        }

        dispatch(allActions.playersActions.addPlayer(playerData.name, playerData.country)).then(() => {
            dispatch(allActions.playersActions.getPlayers())
        })
    }

    const clear = () => {
        setPlayerData({ name: '', country : ''});
    };

    return (
      <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
              <Button className={classes.buttonCreate} onClick={openCloseForm}>Create a player</Button>
              {isOpen && (
                  <div>
                      <TextField
                          name="name"
                          // variant="outline"
                          label="Player name"
                          fullWidth
                          value={playerData.name}
                          onChange={(e) => setPlayerData({ ...playerData, name: e.target.value })}/>
                      <TextField
                          name="country"
                          // variant="outline"
                          label="Player country"
                          fullWidth
                          value={playerData.country}
                          onChange={(e) => setPlayerData({ ...playerData, country: e.target.value })}/>
                      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                  </div>
              )}
          </form>

      </Paper>
    );
}

export default AddPlayer;