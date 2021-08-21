import React from 'react';
import { Container, Grid } from "@material-ui/core";

import Players from './Players.js'
import AddPlayer from './AddPlayer.js';

const PlayersContainer = () => {

    return (
        <Container>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={12} sm={7}>
                    <h1>PLAYERS LIST</h1>
                    <Players />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <AddPlayer></AddPlayer>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PlayersContainer;