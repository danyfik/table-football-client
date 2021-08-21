import React, {useEffect} from 'react';
import {
    CircularProgress,
    Container,
    Grid,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";
import useStyles from "../Games/styles";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../actions";
import _ from 'lodash';

// import Players from './Players.js'
// import AddPlayer from './AddPlayer.js';

const PlayersContainer = () => {
    const classes = useStyles();
    const gamesState = useSelector(state => state.games);
    const teamsState = useSelector(state => state.teams);
    const games = gamesState.games
    console.log('games', games)
    const teams = teamsState.teams
    console.log('teams', teams)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.gamesActions.getGames());
        dispatch(allActions.teamsActions.getTeams());
    }, [dispatch])


    let dataStats = []
    const allTeams = _.union(
        _.map(_.uniqBy(games, 'team1Id'), 'team1Id'),
        _.map(_.uniqBy(games, 'team2Id'), 'team2Id')
    )

    _.forEach(allTeams, team => {
        const gamesPlayed = _.filter(games, g => {
            return g.team1Id === team || g.team2Id === team
        }).length

        const gamesWon = _.filter(games, g => {
            return (g.team1Id === team && g.team1Score > g.team2Score) || (g.team2Id === team && g.team2Score > g.team1Score)
        }).length

        const gamesLost = gamesPlayed - gamesWon
        const winRatio = (gamesWon / gamesPlayed).toFixed(2)
        let goalsFor = 0
        let goalsAgainst = 0

        _.forEach(games, g => {
            if (g.team1Id === team) {
                goalsFor += g.team1Score
                goalsAgainst += g.team2Score
            }
            if (g.team2Id === team) {
                goalsFor += g.team2Score
                goalsAgainst += g.team1Score
            }
        })

        const goalsDifference = goalsFor - goalsAgainst

        dataStats.push({
            team,
            gamesPlayed,
            gamesWon,
            gamesLost,
            winRatio,
            goalsFor,
            goalsAgainst,
            goalsDifference
        })
    })

    dataStats = _.orderBy(dataStats, 'winRatio', 'desc')

    _.forEach(dataStats, (dataStat, i) => {
        dataStat.teamName = _.find(teams, team => {
            return team.id === dataStat.team
        }).name

    })

    return (
        !dataStats ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Team/Player Name</TableCell>
                            <TableCell>Games Played</TableCell>
                            <TableCell>Wins</TableCell>
                            <TableCell>Losses</TableCell>
                            <TableCell>Win Ratio</TableCell>
                            <TableCell>GF</TableCell>
                            <TableCell>GA</TableCell>
                            <TableCell>GD</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataStats.map((teamPlayer) => (
                            <TableRow key={teamPlayer.team}>
                                <TableCell>{teamPlayer.teamName}</TableCell>
                                <TableCell>{teamPlayer.gamesPlayed}</TableCell>
                                <TableCell>{teamPlayer.gamesWon}</TableCell>
                                <TableCell>{teamPlayer.gamesLost}</TableCell>
                                <TableCell>{teamPlayer.winRatio}</TableCell>
                                <TableCell>{teamPlayer.goalsFor}</TableCell>
                                <TableCell>{teamPlayer.goalsAgainst}</TableCell>
                                <TableCell>{teamPlayer.goalsDifference}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default PlayersContainer;