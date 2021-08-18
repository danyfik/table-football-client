import React from 'react';
import {
    Grid,
    CircularProgress,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@material-ui/core";
// import Player from './Player/Player.js'
import useStyles from './styles.js'
import { useSelector } from "react-redux";

const Teams = () => {
    const classes = useStyles();
    const teamsState = useSelector((state) => state.teams);
    const teams = teamsState.teams

    return (
        !teams ? <CircularProgress /> : (
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Player 1</TableCell>
                            <TableCell>Player 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {teams.map((team) => (
                            <TableRow key={team.id}>
                                <TableCell>{team.name}</TableCell>
                                <TableCell>{team.player1Id}</TableCell>
                                <TableCell>{team.player2Id ? team.player2Id : 'No second player'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}

export default Teams;