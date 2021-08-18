import React from 'react';
import { Grid, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import Player from './Player/Player.js'
import useStyles from './styles.js'
import { useSelector } from "react-redux";

const Players = () => {
    const classes = useStyles();
    const playersState = useSelector((state) => state.players);
    console.log('players', playersState.players)
    const players = playersState.players
    console.log('players juste', players)

    return (
        !players ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player) => (
                            <TableRow key={player.id}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default Players;