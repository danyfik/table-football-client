import React from 'react';
import { Container, Grid } from "@material-ui/core";

import Games from './Games.js'
import AddGame from './AddGame.js';
import AddLiveGame from './AddLiveGame.js';
import useStyles from './styles.js';

const GameContainer = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid>
                <Grid>
                    <h1>GAMES LIST</h1>
                    <Games />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Grid container justify="space-between">
                <Grid item xs={12} sm={6}>
                    <AddGame></AddGame>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AddLiveGame></AddLiveGame>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GameContainer;