import React, { useEffect } from 'react';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import useStyles from './styles.js'
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../actions";

const Games = () => {
    const classes = useStyles();
    const gamesState = useSelector(state => state.games);
    const games = gamesState.games

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allActions.gamesActions.getGames());
    }, [dispatch])

    return (
        !games ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell> </TableCell>
                            <TableCell className={classes.tableCell}>Team 1</TableCell>
                            <TableCell className={classes.tableCell}>Team 2</TableCell>
                            <TableCell className={classes.tableCell}>Team 1 score</TableCell>
                            <TableCell className={classes.tableCell}>Team 2 score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map((game) => (
                            <TableRow key={game.id}>
                                <TableCell>{game.id}</TableCell>
                                <TableCell>{game.team1}</TableCell>
                                <TableCell>{game.team2}</TableCell>
                                <TableCell>{game.team1Score}</TableCell>
                                <TableCell>{game.team2Score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default Games;