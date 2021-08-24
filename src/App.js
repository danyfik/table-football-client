import React from "react";
import {Container, AppBar, Typography, Grow, Grid, Button} from "@material-ui/core";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from './styles.js'

import PlayersContainer from './components/Players/PlayersContainer.js'
import TeamsContainer from './components/Teams/TeamsContainer.js'
import GamesContainer from './components/Games/GamesContainer.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import History from './components/History/History.js'

const App = () => {
    const classes = useStyles();

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
        </Container>
    );
}

export default App;