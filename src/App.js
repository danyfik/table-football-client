import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPlayers } from './actions/playersActions.js';
import { getTeams } from './actions/teamsActions.js';
import Players from './components/Players/Players.js'
import Teams from './components/Teams/Teams.js'
import useStyles from './styles.js'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayers());
        dispatch(getTeams());
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(getTeams());
    // }, [dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Test game</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid>
                            <h1>Players</h1>
                            <Players />
                        </Grid>
                        <Grid>
                            <h1>Teams</h1>
                            <Teams />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;