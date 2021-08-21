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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        dispatch(allActions.playersActions.addPlayer(playerData.name, playerData.country))
    }

    const clear = () => {
        setPlayerData({ name: '', country : ''});
    };

    return (
      <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
              <Typography variant="h6">Create a player</Typography>
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
          </form>

      </Paper>
    );
}

export default AddPlayer;