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

    let playersWithNames = []

    _.forEach(teams, t => {
        playersWithNames.push({
            player: t.player1Id,
            playerName: t.player1
        })
        playersWithNames.push({
            player: t.player2Id,
            playerName: t.player2
        })
    })
    playersWithNames = _.uniqBy(playersWithNames, 'player')

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

    let dataStatsPlayers = []

    _.forEach(dataStats, (dataStat, i) => {
        dataStat.teamName = _.find(teams, team => {
            return team.id === dataStat.team
        }).name

        const player1ofTeamStat = _.find(teams, t => t.id === dataStat.team).player1Id
        const player2ofTeamStat = _.find(teams, t => t.id === dataStat.team).player2Id

        const playerOfPlayersStats1 = _.find(dataStatsPlayers, pl => pl.player === player1ofTeamStat)
        const playerOfPlayersStats2 = _.find(dataStatsPlayers, pl => pl.player === player2ofTeamStat)

        if (playerOfPlayersStats1) {
            playerOfPlayersStats1.gamesPlayed += dataStat.gamesPlayed
            playerOfPlayersStats1.gamesWon += dataStat.gamesWon
            playerOfPlayersStats1.gamesLost += dataStat.gamesLost
            playerOfPlayersStats1.goalsFor += dataStat.goalsFor
            playerOfPlayersStats1.goalsAgainst += dataStat.goalsAgainst
            playerOfPlayersStats1.goalsDifference += dataStat.goalsDifference
            playerOfPlayersStats1.winRatio = (playerOfPlayersStats1.gamesWon / playerOfPlayersStats1.gamesPlayed).toFixed(2)
        } else {
            dataStatsPlayers.push({
                player: player1ofTeamStat,
                // playerName: teamData.player1,
                playerName: _.find(playersWithNames, pl => pl.player === player1ofTeamStat).playerName,
                gamesPlayed: dataStat.gamesPlayed,
                gamesWon: dataStat.gamesWon,
                winRatio: dataStat.winRatio,
                gamesLost: dataStat.gamesLost,
                goalsFor: dataStat.goalsFor,
                goalsAgainst: dataStat.goalsAgainst,
                goalsDifference: dataStat.goalsDifference
            })
        }

        if (playerOfPlayersStats2) {
            playerOfPlayersStats2.gamesPlayed += dataStat.gamesPlayed
            playerOfPlayersStats2.gamesWon += dataStat.gamesWon
            playerOfPlayersStats2.gamesLost += dataStat.gamesLost
            playerOfPlayersStats2.goalsFor += dataStat.goalsFor
            playerOfPlayersStats2.goalsAgainst += dataStat.goalsAgainst
            playerOfPlayersStats2.goalsDifference += dataStat.goalsDifference
            playerOfPlayersStats2.winRatio = (playerOfPlayersStats2.gamesWon / playerOfPlayersStats2.gamesPlayed).toFixed(2)
        } else {
            dataStatsPlayers.push({
                player: player2ofTeamStat,
                playerName: _.find(playersWithNames, pl => pl.player === player2ofTeamStat).playerName,
                gamesPlayed: dataStat.gamesPlayed,
                gamesWon: dataStat.gamesWon,
                gamesLost: dataStat.gamesLost,
                winRatio: dataStat.winRatio,
                goalsFor: dataStat.goalsFor,
                goalsAgainst: dataStat.goalsAgainst,
                goalsDifference: dataStat.goalsDifference
            })
        }
    })

    _.remove(dataStatsPlayers, player => player.player === null)

    dataStatsPlayers = _.orderBy(dataStatsPlayers, 'winRatio', 'desc')

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
                                    <TableCell>{team.teamName}</TableCell>
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
                <Typography variant="h6">The ultimate team champion is : {_.head(dataStats).teamName}</Typography>
                <br/>

                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell}>Player Name</TableCell>
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
                            {dataStatsPlayers.map((player) => (
                                <TableRow key={player.player}>
                                    <TableCell>{player.playerName}</TableCell>
                                    <TableCell>{player.gamesPlayed}</TableCell>
                                    <TableCell>{player.gamesWon}</TableCell>
                                    <TableCell>{player.gamesLost}</TableCell>
                                    <TableCell>{player.winRatio}</TableCell>
                                    <TableCell>{player.goalsFor}</TableCell>
                                    <TableCell>{player.goalsAgainst}</TableCell>
                                    <TableCell>{player.goalsDifference}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <br/>
                <Typography variant="h6">The ultimate player champion is : {_.head(dataStatsPlayers).playerName}</Typography>
            </div>
        )
    );
}

export default PlayersContainer;