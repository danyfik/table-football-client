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
            <Grid container justify="space-between" spacing={1}>
                <Grid item xs={12} sm={7}>
                    <Games />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <AddLiveGame></AddLiveGame>
                    <br/>
                    <AddGame></AddGame>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GameContainer;