import React from 'react';
import { Container, Grid } from "@material-ui/core";

import Teams from './Teams.js'
import AddTeam from './AddTeam.js';

const TeamsContainer = () => {

    return (
        <Container>
            <Grid container justify="space-between" spacing={2}>
                <Grid item xs={12} sm={7}>
                    <h1>TEAMS LIST</h1>
                    <Teams />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <AddTeam></AddTeam>
                </Grid>
            </Grid>
        </Container>
    );
}

export default TeamsContainer;