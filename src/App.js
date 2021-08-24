import React, { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid, Button} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import allActions from './actions/index.js';
import PlayersContainer from './components/Players/PlayersContainer.js'
import TeamsContainer from './components/Teams/TeamsContainer.js'
import GamesContainer from './components/Games/GamesContainer.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import History from './components/History/History.js'
import useStyles from './styles.js'

const App = () => {
    const classes = useStyles();
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(allActions.playersActions.getPlayers());
    //     dispatch(allActions.teamsActions.getTeams());
    //     dispatch(allActions.gamesActions.getGames());
    // }, [dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">TABLE FOOTBALL</Typography>
            </AppBar>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={PlayersContainer} />
                    <Route path="/teams" component={TeamsContainer} />
                    <Route path="/games" component={GamesContainer} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/history" component={History} />
                </Switch>
            </Router>
            <Grow in>
                <Container>
                    {/*<Button onClick={fik}>Players</Button>*/}
                    {/*<Button onClick={fik2}>Teams</Button>*/}
                    {/*<Button onClick={fik3}>Games</Button>*/}
                    {/*<Button onClick={() => dispatch(allActions.playersActions.addPlayer('Jack', 'Canada'))}>Add Player</Button>*/}
                    {/*<Container>*/}
                    {/*    <Grid container justify="space-between" spacing={2}>*/}
                    {/*        <Grid item xs={12} sm={7}>*/}
                    {/*            <h1>Players</h1>*/}
                    {/*            <Players />*/}
                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} sm={4}>*/}
                    {/*            <AddPlayer></AddPlayer>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*</Container>*/}
                    {/*<Container>*/}
                    {/*    <Grid container justify="space-between" spacing={2}>*/}
                    {/*        <Grid item xs={12} sm={7}>*/}
                    {/*            <h1>Teams</h1>*/}
                    {/*            <Teams />*/}
                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} sm={4}>*/}
                    {/*            <AddTeam></AddTeam>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*</Container>*/}
                    {/*<Container>*/}
                    {/*    <Grid container justify="space-between" spacing={2}>*/}
                    {/*        <Grid item xs={12} sm={7}>*/}
                    {/*            <h1>Games</h1>*/}
                    {/*            <Games />*/}
                    {/*        </Grid>*/}
                    {/*        <Grid item xs={12} sm={4}>*/}
                    {/*            <AddGame></AddGame>*/}
                    {/*        </Grid>*/}
                    {/*    </Grid>*/}
                    {/*</Container>*/}

                </Container>
            </Grow>
        </Container>
    );
}

export default App;