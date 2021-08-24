import React, {useEffect} from 'react';
import {
    CircularProgress,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";
import useStyles from "../Games/styles";
import {useDispatch, useSelector} from "react-redux";
import allActions from "../../actions";
import _ from 'lodash';

const PlayersContainer = () => {
    const classes = useStyles();
    const gamesState = useSelector(state => state.games);
    const teamsState = useSelector(state => state.teams);
    const games = gamesState.games
    const teams = teamsState.teams

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.gamesActions.getGames());
        dispatch(allActions.teamsActions.getTeams());
    }, [dispatch])

    const allTeams = _.union(
        _.map(_.uniqBy(games, 'team1Id'), 'team1Id'),
        _.map(_.uniqBy(games, 'team2Id'), 'team2Id')
    )

    let dataStats = []

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

        const teamName = _.find(teams, t => {
            return t.id === team
        }).name

        const player1Name = _.find(teams, t => t.id === team).player1
        const player2Name = _.find(teams, t => t.id === team).player2

        let teamNameComplete = player2Name
            ? `${teamName} (${player1Name} and ${player2Name})`
            : `${teamName} (${player1Name})`

        dataStats.push({
            team,
            teamName,
            teamNameComplete,
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

    return (
        !dataStats && teams ? <CircularProgress /> : (
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell}>Team/Player Name</TableCell>
                                <TableCell className={classes.tableCell}>Games Played</TableCell>
                                <TableCell className={classes.tableCell}>Wins</TableCell>
                                <TableCell className={classes.tableCell}>Losses</TableCell>
                                <TableCell className={classes.tableCell}>Win Ratio</TableCell>
                                <TableCell className={classes.tableCell}>GF</TableCell>
                                <TableCell className={classes.tableCell}>GA</TableCell>
                                <TableCell className={classes.tableCell}>GD</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataStats.map((team) => (
                                <TableRow key={team.team}>
                                    <TableCell>{team.teamNameComplete}</TableCell>
                                    <TableCell>{team.gamesPlayed}</TableCell>
                                    <TableCell>{team.gamesWon}</TableCell>
                                    <TableCell>{team.gamesLost}</TableCell>
                                    <TableCell>{team.winRatio}</TableCell>
                                    <TableCell>{team.goalsFor}</TableCell>
                                    <TableCell>{team.goalsAgainst}</TableCell>
                                    <TableCell>{team.goalsDifference}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <br/>
                <Typography variant="h6">The ultimate team champion is : {_.head(dataStats).teamNameComplete}</Typography>
                <br/>

            </div>
        )
    );
}

export default PlayersContainer;