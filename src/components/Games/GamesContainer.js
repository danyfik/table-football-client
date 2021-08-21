import React from 'react';
import { Container, Grid } from "@material-ui/core";

import Games from './Games.js'
import AddGame from './AddGame.js';

const GameContainer = () => {

    return (
        <Container>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={12} sm={7}>
                    <h1>GAMES LIST</h1>
                    <Games />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <AddGame></AddGame>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GameContainer;