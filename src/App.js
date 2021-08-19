import React, { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid, Button} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getPlayers } from './actions/playersActions.js';
import { getTeams } from './actions/teamsActions.js';
import { getGames } from './actions/gamesActions.js';
import AddPlayer from './components/Players/AddPlayer.js';
import AddTeam from './components/Teams/AddTeam.js';
import allActions from './actions/index.js';
import Players from './components/Players/Players.js'
import Teams from './components/Teams/Teams.js'
import Games from './components/Games/Games.js'
import useStyles from './styles.js'

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.playersActions.getPlayers());
        dispatch(allActions.teamsActions.getTeams());
        dispatch(allActions.gamesActions.getGames());
        // dispatch(getTeams());
        // dispatch(getGames());
    }, [dispatch])


    function fik() {
        console.log('fik')
        dispatch(allActions.playersActions.getPlayers())
    }
    function fik2() {
        console.log('fik2')
        dispatch(allActions.teamsActions.getTeams())
    }
    function fik3() {
        console.log('fik3')
        dispatch(allActions.gamesActions.getGames())
    }

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Test game</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Button onClick={fik}>Players</Button>
                    <Button onClick={fik2}>Teams</Button>
                    <Button onClick={fik3}>Games</Button>
                    <Button onClick={() => dispatch(allActions.playersActions.addPlayer('Jack', 'Canada'))}>Add Player</Button>
                    <Container>
                        <Grid container justify="space-between" spacing={2}>
                            <Grid item xs={12} sm={7}>
                                <h1>Players</h1>
                                <Players/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <AddPlayer></AddPlayer>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                            <Grid item xs={12} sm={7}>
                                <h1>Teams</h1>
                                <Teams/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <AddTeam></AddTeam>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <h1>Games</h1>
                        <Games/>
                    </Container>
                    {/*<Grid container justify="space-between" alignItems="stretch" spacing={3}>*/}
                    {/*    <Grid>*/}
                    {/*        <h1>Players</h1>*/}
                    {/*        <Players />*/}
                    {/*    </Grid>*/}
                    {/*    <Grid>*/}
                    {/*        <h1>Teams</h1>*/}
                    {/*        <Teams />*/}
                    {/*    </Grid>*/}
                    {/*    <Grid>*/}
                    {/*        <h1>Games</h1>*/}
                    {/*        <Games />*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </Container>
            </Grow>
        </Container>
    );
}

export default App;